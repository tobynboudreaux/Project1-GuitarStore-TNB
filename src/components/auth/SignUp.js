import React, {Fragment, useState} from 'react'
import { Form, FormGroup, Button } from 'react-bootstrap'
import API from '../util/API';

const SignUp = (props) => {

    const [userUsername, setUserUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const user = localStorage.getItem("user")

    const createUser = async () => {
        setLoading(true);
        const userObj = {
            "username": userUsername,
            "email": userEmail,
            "password": userPassword
        }
        await API.createUser(userObj)
          .then(res => res.data)
          .then(data => props.setUser(data))
          .then(setLoading(false))
    }

    return (
        <Fragment>
          {user ? <h1>You are logged in!</h1> :
            <Form
              onSubmit={e => {
                  e.preventDefault();
                  createUser();    
              }}
            >
              <h1>Sign Up</h1>
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
                  type="email"
                  name="email"
                  value={userEmail}
                  placeholder="john@gmail.com"
                  onChange={e => setUserEmail(e.target.value)}
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

export default SignUp
