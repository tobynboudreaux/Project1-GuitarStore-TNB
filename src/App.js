import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/layout/NavbarComponent";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
const url = "http://3.139.235.28:8080/project0/";

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Landing} url={url} />
          <Route component={Routes} url={url} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
