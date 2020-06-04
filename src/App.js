import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AppPage from "./AppPage.js"
import Dummy from "./dummy"

export default function App() {
  return (
    <Router>
      <Switch>
        {["/LEARN/BUSINESSES/PLUMBING/NEW/HOW-TO-START-A-PLUMBING-BUSINESS/", "/learn/businesses/plumbing/new/how-to-start-a-plumbing-business/"].map((path, index) =>
          <Route exact path={path} sensitive={true} component={AppPage} key={index} />
        )}
        <Route component={Dummy}/>
      </Switch>
    </Router>
  )
}
