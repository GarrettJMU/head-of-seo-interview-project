import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AppPage from "./AppPage.js"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/learn/businesses/plumbing/new/how-to-start-a-plumbing-business/">
          <AppPage />
        </Route>
      </Switch>
    </Router>
  )
}
