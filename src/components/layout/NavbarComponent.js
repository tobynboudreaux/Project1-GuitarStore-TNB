import React, { Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavbarComponent = (props) => {

    const user = localStorage.getItem("user")
    
    const logout = () => {
        try {
            props.setUser();
            localStorage.clear();
        } catch(err) {
            console.log(err)
        }
    }

    const links = (
        <Fragment>
            <Nav.Item>
                <Nav.Link href="/products" >Products</Nav.Link>
            </Nav.Item>
        </Fragment>
  
    );

    const adminAuthLinks = (
        <Fragment>
            <Nav.Item>
                <Nav.Link href="/products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/employees">Employees</Nav.Link>
            </Nav.Item>
        </Fragment>
    )

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="container-fluid">
                    {user && user.charAt(user.length - 3) == 1 ? adminAuthLinks : links}
                    {user ? (
                        <Nav.Item className="ml-auto">
                            <Button variant="info" className="justify-content-end" 
                            onClick={() => logout()}>
                                Sign Out
                            </Button>
                        </Nav.Item>
                    ) : (
                        <Nav.Item>
                            <Button variant="info" className="justify-content-end" href="/login" >Login</Button>
                        </Nav.Item>
                    )}
                </Nav>
        </Navbar>
    );
};

export default NavbarComponent;