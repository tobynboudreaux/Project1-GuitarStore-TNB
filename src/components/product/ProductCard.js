import React, {useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import API from '../util/API'
const user = localStorage.getItem("user");

const ProductCard = (props) => {

    const [show, setShow] = useState(false);

    const deleteProduct = () => {
        API.deleteProduct(props.product.id)
    }

    const editProduct = (event) => {
        const product = {
            posID: 99,
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            department: event.target.department.value,
            brand: event.target.brand.value
        }
        API.editProduct(props.product.id, product)
        .then(res => res.data)
        .then(data => console.log(data))
    }

    return (
        <div>
            <Card key={props.product.id}>
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    {props.user ? <Card.Text>Position ID: {props.product.posID}</Card.Text> : null }
                    <Card.Subtitle className="mb-2 text-muted">Price: {props.product.price}</Card.Subtitle>
                    <Card.Text>
                    Description:
                    <br></br>
                    {props.product.description}
                    </Card.Text>
                    <br></br>
                    <br></br>
                    <Card.Text>Department: {props.product.department}</Card.Text>
                    <Card.Text>Brand: {props.product.brand}</Card.Text>
                    <Card.Text>Features: </Card.Text>
                    {user ? (
                        <div>
                            <Button onClick={() => setShow(!show)}>Edit Product</Button>
                            {show ? (
                                <Form onSubmit={e => {
                                    e.preventDefault();
                                    editProduct(e);
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
                            ): null}
                            <Button onClick={() => deleteProduct()}>Delete Product</Button>
                        </div>
                    ) : null}
                    {props.product.features ? 
                    props.product.features.map(feat => (
                        <div>
                            <Card.Text> {feat.description}</Card.Text>
                        </div>
                    )) : null}
                    <br></br>
                    <Card.Text>Specifications: </Card.Text>
                    {props.product.specifications ? 
                    props.product.specifications.map(spec => (
                        <div>
                            <Card.Text> {spec.description}</Card.Text>
                        </div>
                    )) : null}
                    <br></br>
                    {props.product.reviewAverage !== 0.0 ? 
                    <Card.Title>Review Average: {props.product.reviewAverage}</Card.Title>
                    :
                    null}
                    <br></br>
                    <Card.Title>Reviews: </Card.Title>
                    <br></br>
                    {props.product.reviews ? props.product.reviews.map(r => (
                        <Card>
                        <Card.Text>{r.title}</Card.Text>
                        <Card.Text>{r.body}</Card.Text>
                        </Card>
                    )) : null}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
