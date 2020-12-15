import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import API from "../util/API";
const user = localStorage.getItem("user");

export default class Products extends React.Component {

    state = {
        products: []
    };

    addProduct(event) {
        const product = {
            posID: 99,
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            department: event.target.department.value,
            brand: event.target.brand.value
        }
        try {
            API.createProduct(product)
        .then((response) => response.data)
        .then((json) => console.log(json))
        } catch (error) {
            console.log(error)
        }
        
    }

    render() {
        return (
            <div>
                {user ? (
                    <div>
                        <h1>Create a new product</h1>
                        <Form onSubmit={e => {
                            e.preventDefault();
                            this.addProduct(e);
                        }}>
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
                    </div>
                ):null}
                
                {this.props.products.map(product => (
                        <Card key={product.id}>
                        <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                        <Card.Link href={"/products/" + product.id}>Product Page</Card.Link>
                        </Card.Body>
                        </Card>
                    ))}
            </div>
        )
    }
}