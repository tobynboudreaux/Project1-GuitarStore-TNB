import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export default class Guitars extends React.Component {

    state = {
        guitars: []
    };

    addProduct(event) {
        fetch("http://3.139.235.28:8080/project0/product", {
            method: 'POST',
            body: JSON.stringify({
                uniqueID: 0,
                posID: 99,
                title: event.target.title.value,
                description: event.target.description.value,
                price: event.target.price.value,
                department_UID: event.target.department.value,
                style_UID: 3,
                category_UID: 3,
                brand_UID: event.target.brand.value,
                premiumGear_UID: 3,
                condition_UID: 3  
            })
        })
        .then((response) => response.json())
        .then((json) => console.log(json))

    }

    render() {
        return (
            <div>
                <h1>Create a new product</h1>
                <Form onSubmit={e => this.addProduct(e)}>
                    <Form.Label>
                        title
                        <Form.Control type="text" name="title" />
                    </Form.Label>
                    <Form.Label>
                        description
                        <Form.Control type="text" name="description" />
                    </Form.Label>
                    <Form.Label>
                        price
                        <Form.Control type="text" name="price" />
                    </Form.Label>
                    <Form.Label>
                        brand
                        <Form.Control type="text" name="brand" />
                    </Form.Label>
                    <Form.Label>
                        department
                        <Form.Control type="text" name="department" />
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
                        <Card.Link href={"/guitars/" + guitar.uniqueID}>Guitar Page</Card.Link>
                        </Card.Body>
                        </Card>
                    ))}
            </div>
        )
    }
}