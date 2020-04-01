import React, { Component } from "react"
import { Router } from '@reach/router';
import HodaRouterExpense from "../components/hoda_router_components/expense"
import HodaRouterGroups from "../components/hoda_router_components/groups"

class HodaRouter extends Component {
  render() {
    return (
      <div>
        <Router basepath="/hoda_router">
          <HodaRouterExpense path="/groups/:id"/>
          <HodaRouterGroups path="/"/>
        </Router>
      </div>
    )
  }
}

export default HodaRouter