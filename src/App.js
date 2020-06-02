import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AppPage from "./AppPage.js"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/learn/businesses/plumbing/new/how-to-start-a-plumbing-business/">
            <AppPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
