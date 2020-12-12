import React, { Fragment } from "react";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

function Login (props) {

  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem("user")

  const authHandler = async () => {
      setLoading(true);
      await (
        fetch("http://3.139.235.28:8080/project0/userlogin", {
          method: "POST",
          body: JSON.stringify ({
            "username": userUsername,
            "password": userPassword
          })    
        })
        .then(res => res.json())
        .then(json => props.setUser(json))
        .then(setLoading(false))
      )
  }

  return (
    <Fragment>
      {user ? <h1>You are logged in!</h1> :
        <Form
          onSubmit={e => {
              e.preventDefault();
              authHandler();    
          }}
        >
          <h1>Sign In</h1>
          <br />
          <FormGroup>
          <input
              type="username"
              name="username"
              value={userUsername}
              placeholder="johnnyboy1337"
              onChange={e => setUserUsername(e.target.value)}
          ></input>
          </FormGroup>
          <FormGroup>
          <input
              type="password"
              name="password"
              value={userPassword}
              placeholder="Password"
              onChange={e => setUserPassword(e.target.value)}
          ></input>
          </FormGroup>
          <Button type="submit" disabled={loading} block={true}>
          {loading ? "Loading..." : "Sign In"}
          </Button>
        </Form>
      }
    </Fragment>

    );
}
export default Login;