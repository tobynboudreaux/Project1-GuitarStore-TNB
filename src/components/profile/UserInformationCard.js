import React, {useState} from 'react'
import { Card, Form, Button, FormGroup } from 'react-bootstrap'
import API from '../util/API';

const UserInformationCard = (props) => {

    const [show, setShow] = useState(false)
    const [userUsername, setUserUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const deleteUser = () => {
        API.deleteUser(props.employee.uniqueID)
    }

    const editUser = () => {
        const userObj = {
            uniqueID: props.employee.uniqueID,
            username: userUsername,
            email: userEmail,
            password: userPassword,
            userType_UID: props.employee.userType_UID
        }
        API.editUser(props.employee.uniqueID, userObj);
    }
    
    return (
        <div>
            <Card>
                <Card.Title>Email: {props.employee.email}</Card.Title>
                <Card.Text>UserName: {props.employee.username}</Card.Text>
                <Card.Text>Role: {props.employee.userType_UID}</Card.Text>
                <Card.Footer>
                    <Button onClick={() => setShow(!show)}>Edit User</Button>
                    <Button onClick={() => deleteUser()}>Delete User</Button>
                    {show ? (
                    <Form onSubmit={(e) => {
                    e.preventDefault();
                    editUser();
                    }}>
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
                        {loading ? "Loading..." : "Submit Changes"}
                        </Button>
                    </Form>
                ) : null}
                </Card.Footer>
                
            </Card>
        </div>
    )
}

export default UserInformationCard
