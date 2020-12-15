import React from "react";
import { Carousel, Image, Jumbotron, Container, Button, Nav, Card } from "react-bootstrap";
import API from "../util/API";

export default class Landing extends React.Component {

    state = {
        products: []
      }
      
      componentDidMount() {
        API.getProduct()
        .then(res => res.data)
        .then((data) => {
          this.setState({ products: data });
        }).catch(err => console.error(err));
      }

      render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Product Shop</h1>
                        <p>
                            Product Shop allows you to manage a store of employees. 
                        </p>
                        <Nav className="container-fluid">
                                <Nav.Item className="">
                                    <Nav.Link href="/products">
                                        <Button>
                                            Shop Products
                                        </Button>
                                    </Nav.Link>
                                </Nav.Item>
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
                            src="https://www.ftbistro.com/wp-content/uploads/2013/01/product-events-400x200.jpg"
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
                            src="https://trusic.com/wp-content/uploads/2019/11/best-acoustic-electric-product-400x200.jpg"
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
                            src="https://bassistmag.com/wp-content/uploads/2020/05/bass-product-913092_1280-400x200.jpg"
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
                            src="https://www.jazzproduct.com/imgs/why-choose-a-Gibson-jazz-product_400x200.jpg"
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
                            src="https://bassistmag.com/wp-content/uploads/2020/05/bass-product-wallpapers_5773239-400x200.jpg"
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
                
                    {this.state.products.slice(0, 5).map(product => (
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
                    
                <ul>
                </ul>
            </div>

        )
      }
    }

