import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { NavItem, NavLink, Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import API from "../util/API";

const NavbarComponent = (props) => {

    const user = localStorage.getItem("user")
    const location = useLocation().pathname
    
    const logout = async () => {
        await API.signOut()
        .then(props.setUser())
        .then(localStorage.clear())
    }

    const links = (
        <Fragment>
            <Nav.Item>
                <Nav.Link href="/products" >Products</Nav.Link>
            </Nav.Item>
            { location === "/products" ? (
            <Fragment>
                <Dropdown as={NavItem} className="mr-auto">
                    <Dropdown.Toggle as={NavLink}>Brands</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(1) }>Guitar Center</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(2) }>Ibanez</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(3) }>Gibson</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem} className="mr-auto mr-2">
                    <Dropdown.Toggle as={NavLink}>Department</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(1) }>Products</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(2) }>Basses</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(3) }>Amps and Effects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
             ) : null }
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
            { location === "/products" ? (
            <Fragment>
                <Dropdown as={NavItem} className="mr-auto">
                    <Dropdown.Toggle as={NavLink}>Brands</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(1) }>Guitar Center</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(2) }>Ibanez</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByBrand(3) }>Gibson</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem} className="mr-auto mr-2">
                    <Dropdown.Toggle as={NavLink}>Department</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(1) }>Products</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(2) }>Basses</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getProductsByDepartment(3) }>Amps and Effects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
             ) : null }
        </Fragment>
    )

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="container-fluid">
                    {user ? user.charAt(user.length - 2) == 1 ? adminAuthLinks : links : links}
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