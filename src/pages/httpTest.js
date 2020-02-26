import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO";
import axios from 'axios';
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

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
        <SEO title={this.props.intl.formatMessage({ id: 'Http Test' })}/>
        hello this is http test page
        <ul>
        {this.state.users.map(user => (
          <li key={user.phone}>{user.name}, {user.email}</li>
        ))}
        </ul>
        <hr />
        <h1>Test i18n as well</h1>
        <h2>Translate "hello", using this.props.intl.formatMessage method: {this.props.intl.formatMessage({ id: "hello"})}</h2>
        <h2>Translate "hello", using FormattedMessage component:
          <FormattedMessage id={"hello"}/>
        </h2>
        <FormattedMessage id={"testData"}/>
        <br/>
        <FormattedMessage id={"This message does not exist in zh.json file"}/>
      </Layout>
    )
  }
}

export default injectIntl(HttpTest);