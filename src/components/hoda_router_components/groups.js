import React from "react"
import Layout from "../layout"
import Component from "../../serious/utils/component"

class HodaRouterGroups extends Component {
  render() {
    return (
      <Layout>
        hello hoda router groups
        {this.translate('price')}
      </Layout>
    )
  }
}

export default HodaRouterGroups