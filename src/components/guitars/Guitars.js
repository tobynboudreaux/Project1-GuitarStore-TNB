import React from "react";
import { Form, Button } from "react-bootstrap";

export default class Guitars extends React.Component {

    state = {
        guitars: []
    };

    addProduct(event) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({
              title: event.target.title.value,
              body: event.target.body.value,
              userId: event.target.userId.value  
            })
        })
        .then((response) => response.json())
        .then((json) => console.log(json))

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(json => this.setState({ guitars: json }))
    };

    render() {
        return (
            <div>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    this.addProduct(e)
                }}>
                    <Form.Label>
                        title
                        <Form.Control type="text" name="title" />
                    </Form.Label>
                    <Form.Label>
                        body
                        <Form.Control type="text" name="body" />
                    </Form.Label>
                    <Form.Label>
                        userId
                        <Form.Control type="text" name="userId" />
                    </Form.Label>
                    <Button type="submit">Submit</Button>
                </Form>
                <ul>
                    {this.state.guitars.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}