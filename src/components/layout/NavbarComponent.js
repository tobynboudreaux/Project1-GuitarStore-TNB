import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarComponent = () => {
    const links = (
        <Fragment>
            <Nav.Link href="/guitars" >Guitars</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
        </Fragment>
  
    );

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    {links}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
        </Navbar>
    );
};

export default NavbarComponent;