import React from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap';
import API from '../util/API';
import UserInformationCard from './UserInformationCard';

class Profiles extends React.Component {

    state = {
        employees: [],
        userName: "",
        password: "",
        email: ""
    }

    componentDidMount() {
        API.getUsers()
        .then(res => res.data)
        .then(data => this.setState({ employees: data }))
    }

    postUser() {
        const userObj = {
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            userType_UID: 2
        }
        try {
            API.createUser(userObj)
        .then(res => res.data)
        .then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        
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
                    <UserInformationCard key={e.id} employee={e} />
                ))}
            </div>
        )
    }
    
}

export default Profiles
