import React from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import UserInformationCard from './UserInformationCard';
const user = localStorage.getItem("user");

class Profiles extends React.Component {

    state = {
        employees: ["a", "e"],
        userName: "",
        password: "",
        email: ""
    }

    componentDidMount() {
        fetch("http://3.139.235.28:8080/project0/user")
        .then(res => res.json())
        .then(json => console.log(json))
    }

    postUser() {
        fetch("http://3.139.235.28:8080/project0/user", {
            method: "POST",
            body: JSON.stringify({
                uniqueID: 0,
                username: this.state.userName,
                email: this.state.email,
                password: this.state.password,
                userType_UID: 2
            })
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    render() {
        return (
            <div>
                <h1>Employees</h1>
                <Form onSubmit={e => {
                        e.preventDefault();
                        this.postUser();    
                    }}
                    >
                    <h1>Create Employee</h1>
                    <br />
                    <FormGroup>
                    <input
                        type="username"
                        name="username"
                        value={this.state.userName}
                        placeholder="johnnyboy1337"
                        onChange={e => this.setState({ userName: e.target.value })}
                    ></input>
                    </FormGroup>
                    <FormGroup>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="john@gmail.com"
                        onChange={e => this.setState({ email: e.target.value })}
                    ></input>
                    </FormGroup>
                    <FormGroup>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={e => this.setState({ password: e.target.value })}
                    ></input>
                    </FormGroup>
                    <Button type="submit"  block={true}>
                        Create
                    </Button>
                </Form>
                {this.state.employees.map(e => (
                    <UserInformationCard employee={e} />
                ))}
            </div>
        )
    }
    
}

export default Profiles
