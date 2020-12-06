import React from "react";
import { Form, Button, Card } from "react-bootstrap";

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
                <Form >
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
                {this.props.guitars.map(guitar => (
                        <Card key={guitar.uniqueID}>
                        <Card.Body>
                        <Card.Title>{guitar.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{guitar.price}</Card.Subtitle>
                        <Card.Text>
                        {guitar.description}
                        </Card.Text>
                        <Card.Link href="/cart">Add to Cart</Card.Link>
                        <Card.Link href={"/guitar/" + guitar.uniqueID}>Guitar Page</Card.Link>
                        </Card.Body>
                        </Card>
                    ))}
            </div>
        )
    }
}