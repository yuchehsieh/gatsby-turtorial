import React, { Component } from "react"
import Layout from "../layout"

class HodaRouterExpense extends Component {

  componentDidMount() {
    // debugger;
  }

  render() {
    return (
      <Layout>
        <h3>hello hoda router expense</h3>
        <p>物件編號：{this.props.id}</p>
      </Layout>
    )
  }
}

export default HodaRouterExpense