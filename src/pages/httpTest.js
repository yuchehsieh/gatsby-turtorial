import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO";
import axios from 'axios';

class HttpTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({
        users: data
      })

  }

  render() {
    return (
      <Layout>
        <SEO title={'Http Test'}/>
        hello this is http test page
        <ul>
        {this.state.users.map(user => (
          <li key={user.phone}>{user.name}, {user.email}</li>
        ))}
        </ul>
      </Layout>
    )
  }
}

export default HttpTest