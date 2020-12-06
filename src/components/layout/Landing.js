import React from "react";
import { Carousel, Image, Jumbotron, Container, Button, Nav, Card } from "react-bootstrap";

export default class Landing extends React.Component {

    state = {
        guitars: []
      }

      componentDidMount() {
        fetch("http://3.139.235.28:8080/project0/product")
        .then(res => res.json())
        .then((json) => {
          this.setState({ guitars: json });
        }).catch(err => console.error(err));
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
                                <Nav.Link href="/guitars">
                                    Shop Guitars
                                </Nav.Link>
                            </Button>
                            {' '}
                            <Button variant="success">
                                <Nav.Link href="login">
                                    Sign In
                                </Nav.Link>
                            </Button>
                            {' '}
                            <Button variant="success">
                                <Nav.Link href="/signup">
                                    Sign Up
                                </Nav.Link>
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
                <Jumbotron fluid>
                    <h1 className="text-center">Our Top 5 Picks</h1>
                </Jumbotron>
                
                    {this.state.guitars.slice(0, 5).map(guitar => (
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
                    
                <ul>
                </ul>
            </div>

        )
      }
    }

