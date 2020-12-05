import React from "react";
import axios from 'axios';
import { Carousel, Image, Jumbotron, Container, Button, Nav, Card } from "react-bootstrap";

export default class Landing extends React.Component {

    state = {
        guitars: []
      }

      componentDidMount() {
        fetch("http://3.139.235.28:8080/project0/product")
        .then(res => console.log(res))
        .then(json => this.setState({ guitars: json }))
      }

      render() {
        console.log(this.state.guitars)

        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Guitar Shop</h1>
                        <p>
                        This is a place where guitar lovers can come and do what they love. Click the button below to start browsing now!
                        </p>
                        <Nav className="justify-content-center mr-auto">
                            <Button variant="dark">
                                <Nav.Item>
                                    Shop Guitars
                                </Nav.Item>
                            </Button>
                            {' '}
                            <Button variant="success">
                                <Nav.Item>
                                    Sign In
                                </Nav.Item>
                            </Button>
                            {' '}
                            <Button variant="success">
                                <Nav.Item>
                                    Sign Up
                                </Nav.Item>
                            </Button>
                        </Nav>
                    </Container>
                </Jumbotron>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://www.theunley.com.au/wp-content/uploads/Generic-Band-Image-03-1030x515-400x200.jpg"
                            alt="First Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://www.ftbistro.com/wp-content/uploads/2013/01/guitar-events-400x200.jpg"
                            alt="Second Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://trusic.com/wp-content/uploads/2019/11/best-acoustic-electric-guitar-400x200.jpg"
                            alt="Third Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://bassistmag.com/wp-content/uploads/2020/05/bass-guitar-913092_1280-400x200.jpg"
                            alt="Fourth Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://www.jazzguitar.com/imgs/why-choose-a-Gibson-jazz-guitar_400x200.jpg"
                            alt="Fifth Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item interval={3000}>
                        <Image
                            className="d-block w-100"
                            src="https://bassistmag.com/wp-content/uploads/2020/05/bass-guitar-wallpapers_5773239-400x200.jpg"
                            alt="Sixth Slide"
                            fluid
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Card>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <ul>
                { this.state.guitars.map(guitar => <li key={guitar.id}>{guitar.title}</li>)}
                </ul>
            </div>

        )
      }
    }

