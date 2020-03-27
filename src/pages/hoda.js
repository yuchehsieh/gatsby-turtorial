import React, { Component } from "react"
import Layout from "../components/layout"
import axios from "axios"
import FormFields from "../components/ui/formFields"
import { validate } from "../components/ui/validate"
import PieDemo from "../components/hoda_test/pieDemo"
import BarDemo from "../components/hoda_test/barDemo"
import LineDemo from "../components/hoda_test/lineDemo"

const BASE_URL = `https://hodatest.azurewebsites.net`
const windowsLocalStorage = window.localStorage

class Hoda extends Component {

  constructor(props) {
    super(props)

    this.onImageChange = this.onImageChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.state = {
      users: [],
      name: {
        element: "input",
        value: "", /** event.target.value **/
        config: {
          label: "Name",
          name: "name_input", /** event.target.name **/
          type: "text",
        },
        validation: { required: true },
        valid: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          label: "Password",
          name: "password_input",
          type: "password",
        },
        validation: { required: true },
        valid: false,
        validationMessage: "",
      },
      isLogin: false,
      userName: null,
      image: {
        src: null,
      },
    }
  }

  async componentDidMount() {
    const users = await this.fetchUsers()
    if (!users) {
      return
    }

    const token = windowsLocalStorage.getItem("token")
    if (token) {
      const { Name: userName } = await this.getLoginUserInfo(token)
      if (userName) {
        this.setState({ isLogin: true, userName })
      }
    }

    this.setState({ users })
  }

  async fetchUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "crossdomain": true,
          },
        },
        // {
        //   onDownloadProgress: progressEvent => {
        //     console.log("Upload Progress: " + progressEvent.loaded / progressEvent.total)
        //   },
      )
      const users = response.data
      return users
    } catch {
      return false
    }
  }

  onChange(event, fieldName) {
    const value = event.target.value
    const newElement = this.state[fieldName]
    newElement.value = value
    newElement.valid = false
    newElement.validationMessage = ""
    this.setState({
      [fieldName]: newElement,
    })
  }

  async onFormSubmit(event, actionType) {
    event.preventDefault()

    if (!actionType) {
      return
    }

    const name = { ...this.state.name }
    const password = { ...this.state.password }
    let dataToSubmit = { name, password }


    let allCorrect = true

    for (let key in dataToSubmit) {
      let datum = dataToSubmit[key]
      datum = validate(datum)
      allCorrect = allCorrect && datum.valid
    }
    /**
     * the only chance that valid will be true
     */

    if (!allCorrect) {
      this.setState({ ...dataToSubmit })
      return
    }

    let isSuccess = false


    if (actionType === ActionType.REGISTER) {
      isSuccess = await this.createUser(dataToSubmit)
    }
    if (actionType === ActionType.LOGIN) {
      isSuccess = await this.login(dataToSubmit)
    }

    if (isSuccess) {
      let users = await this.fetchUsers()
      this.setState({ isLogin: true, users })
    }

  }

  async createUser(data) {
    let extractedValue = {}
    for (let key in data) {
      const capitalizeKey = capitalize(key)
      extractedValue[capitalizeKey] = data[key].value
    }

    try {
      const response = await axios.put(`${BASE_URL}/user`, extractedValue, {
        onUploadProgress: progressEvent => {
          console.log("Upload Progress: " + progressEvent.loaded / progressEvent.total)
        },
      })
      const user = response.data
    debugger;
      return true
    } catch (e) {
      console.log(e)
      alert("Create Fail")
      return false
    }
  }

  async login(data) {
    let extractedValue = {}
    for (let key in data) {
      const capitalizeKey = capitalize(key)
      extractedValue[capitalizeKey] = data[key].value
    }

    try {
      const response = await axios.post(`${BASE_URL}/login`, extractedValue)
      const data = response.data
      const token = data[0].Token
      windowsLocalStorage.setItem("token", token)
    debugger;
      return true
    } catch (e) {
      console.log(e)
      alert("Login Fail")
      return false
    }
  }

  async getLoginUserInfo(token) {
    try {
      const response = await axios.get(`${BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = response.data
      const user = data[0]
      return user
    } catch (e) {
      console.log(e)
      return false
    }
  }

  render() {
    return (
      <Layout>
        <div style={{display: 'flex'}}>
          <PieDemo/>
          <LineDemo/>
          <BarDemo/>
        </div>
        <h1>Hello from hoda page!</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.Id}>
              {user.Name}
            </li>
          ))}
        </ul>
        <hr/>
        <h1>Create User</h1>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <FormFields
            id={"name"}
            formdata={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <FormFields
            id={"password"}
            formdata={this.state.password}
            onChange={this.onChange.bind(this)}
          />
        </form>
        <button type="submit" onClick={e => this.onFormSubmit(e, ActionType.REGISTER)}>Create User</button>
        <button type="submit" onClick={e => this.onFormSubmit(e, ActionType.LOGIN)}>Login</button>
        {this.state.isLogin &&
        <div>
          <h2>You are successfully login</h2>
          <h4>Hello, {this.state.userName}</h4>
        </div>
        }
        <hr/>
        <input type="file" onChange={this.onImageChange}/>
        <img src={this.state.image.src || ""} style={{ height: "5em" }}/>
      </Layout>
    )
  }

  async onImageChange(event) {
    let currentTarget = event.currentTarget

    let selectedFiles = currentTarget.files
    if (selectedFiles.length === 0) return

    let file = selectedFiles[0]

    try {
      let dataUrl = await toBase64(file)

      this.setState({ image: { src: dataUrl } })

      // let blob = await base64ToBlob(dataUrl);
      /*** FileReader ***/
      // let reader = new FileReader();
      // reader.readAsArrayBuffer(blob);
      //
      /*** createObjectURL ***/
      // let objectUrl = URL.createObjectURL(blob);
    } catch (e) {
      console.log(e)
    }
  }
}

const toBase64 = (file) => {
  return new Promise(((resolve, reject) => {
      let reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = () => {
        reject(reader.error)
      }
      reader.readAsDataURL(file)
    }
  ))
}

const base64ToBlob = (dataURI) => {

  let byteString = atob(dataURI.split(",")[1])
  let ab = new ArrayBuffer(byteString.length)
  let ia = new Uint8Array(ab)

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: "image/jpeg" })
}

const ActionType = {
  LOGIN: "login",
  REGISTER: "register",
}

const capitalize = (name) => {
  if (name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  } else {
    return null
  }
}

export default Hoda