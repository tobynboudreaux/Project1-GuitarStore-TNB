import React from 'react'
import { Card } from 'react-bootstrap'

const GuitarCard = (props) => {
    return (
        <div>
            <Card key={props.guitar.uniqueID}>
                <Card.Body>
                    <Card.Title>{props.guitar.title}</Card.Title>
                    {props.user ? <Card.Text>Position ID: {props.guitar.posID}</Card.Text> : null }
                    <Card.Subtitle className="mb-2 text-muted">Price: {props.guitar.price}</Card.Subtitle>
                    <Card.Text>
                    Description:
                    <br></br>
                    {props.guitar.description}
                    </Card.Text>
                    <br></br>
                    <br></br>
                    <Card.Text>Department: {props.guitar.department.description}</Card.Text>
                    <Card.Text>Style: {props.guitar.style.description}</Card.Text>
                    <Card.Text>Category: {props.guitar.category.description}</Card.Text>
                    <Card.Text>Brand: {props.guitar.brand.description}</Card.Text>
                    <Card.Text>Premium Gear: {props.guitar.premiumGear.description}</Card.Text>
                    <Card.Text>Condition: {props.guitar.condition.description}</Card.Text>
                    <Card.Text>Features: </Card.Text>
                    {props.guitar.features ? 
                    props.guitar.features.map(feat => (
                        <div>
                            <Card.Text> {feat.description}</Card.Text>
                        </div>
                    )) : null}
                    <br></br>
                    <Card.Text>Specifications: </Card.Text>
                    {props.guitar.specifications ? 
                    props.guitar.specifications.map(spec => (
                        <div>
                            <Card.Text> {spec.description}</Card.Text>
                        </div>
                    )) : null}
                    <br></br>
                    {props.guitar.reviewAverage !== 0.0 ? 
                    <Card.Title>Review Average: {props.guitar.reviewAverage}</Card.Title>
                    :
                    null}
                    <br></br>
                    <Card.Title>Reviews: </Card.Title>
                    <br></br>
                    {props.guitar.reviews ? props.guitar.reviews.map(r => (
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

export default GuitarCard
