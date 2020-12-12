import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

function App() {

  const [user, setUser] = useState();
  
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    }
  }, [user, setUser])

  console.log(localStorage.getItem("user"))

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route render={(props => (
              <Routes {...props} user={user} setUser={setUser} />
          ))} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
