import React, { Component } from "react";
import Layout from "../components/layout"
import axios from 'axios';
import FormFields from "../components/ui/formFields";
import {validate} from '../components/ui/validate';

const BASE_URL = `http://hodatest.azurewebsites.net`;

class Hoda extends Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      users: [],
      name: {
        element: 'input',
        value: '', /** event.target.value **/
        config: {
          label: 'Name',
          name: 'name_input', /** event.target.name **/
          type: 'text'
        },
        validation: { required: true },
        valid: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          label: 'Password',
          name: 'password_input',
          type: 'password'
        },
        validation: { required: true },
        valid: false,
        validationMessage: '',
      },
    }
  }

  async componentDidMount() {
    const users = await this.fetchUsers();
    if(!users) {
      return;
    }
    this.setState({users})
  }

  async fetchUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'crossdomain': true
        }
      });
      const users = response.data
      return users;
    } catch {
      return false;
    }
  }

  onChange(event, fieldName) {
    const value =  event.target.value;
    const newElement = this.state[fieldName];
    newElement.value = value;
    newElement.valid = false;
    newElement.validationMessage = '';
    this.setState({
      [fieldName]: newElement
    })
  }

  async onFormSubmit(event) {
    event.preventDefault();

    const name = { ... this.state.name};
    const password = { ...this.state.password};

    const dataToSubmit = { name, password };
    let allCorrect = true;

    for(let key in dataToSubmit) {
      let datum = dataToSubmit[key];
      datum = validate(datum);
      allCorrect = allCorrect && datum.valid;
    }
    /**
     * the only chance that valid will be true
     */

    if(!allCorrect) {
      this.setState({...dataToSubmit});
      return;
    }

    await this.createUser(dataToSubmit);
    // this.setState({name, id});

  }

  async createUser(data) {
    let extractedValue = {};
    for(let key in data) {
      const capitalizeKey = key.charAt(0).toUpperCase() + key.slice(1)
      extractedValue[capitalizeKey] = data[key].value;
    }
    let formdata = new FormData();
    formdata.append("user", JSON.stringify(extractedValue))
    debugger;

    try {
      const response = await axios.put(`${BASE_URL}/user`, formdata);
      const user = response.data
      debugger;
    } catch(e) {
      console.log(e);
      return false;
    }

  }

  render() {
    return (
      <Layout>
        <h1>Hello from hoda page!</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.Id}>
              {user.Name}
            </li>
          ))}
        </ul>
        <hr/>
        <form onSubmit={this.onFormSubmit}>
          <FormFields
            id={'name'}
            formdata={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <FormFields
            id={'password'}
            formdata={this.state.password}
            onChange={this.onChange.bind(this)}
          />
          <button type="submit" onClick={this.onFormSubmit}>Submit</button>
        </form>
      </Layout>
    )
  }
}

export default Hoda