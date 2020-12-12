import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { NavItem, NavLink, Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";

const NavbarComponent = (props) => {

    const user = localStorage.getItem("user")
    const location = useLocation().pathname
    
    const logout = async () => {
        fetch("http://3.139.235.28:8080/project0/userlogout")
        props.setUser();
        localStorage.clear();
    }

    const links = (
        <Fragment>
            <Nav.Item>
                <Nav.Link href="/guitars" >Guitars</Nav.Link>
            </Nav.Item>
            { location === "/guitars" ? (
            <Fragment>
                <Dropdown as={NavItem} className="mr-auto">
                    <Dropdown.Toggle as={NavLink}>Brands</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(1) }>Guitar Center</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(2) }>Ibanez</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(3) }>Gibson</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem} className="mr-auto mr-2">
                    <Dropdown.Toggle as={NavLink}>Department</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(1) }>Guitars</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(2) }>Basses</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(3) }>Amps and Effects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
             ) : null }
        </Fragment>
  
    );

    const adminAuthLinks = (
        <Fragment>
            <Nav.Item>
                <Nav.Link href="/guitars">Guitars</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/employees">Employees</Nav.Link>
            </Nav.Item>
            { location === "/guitars" ? (
            <Fragment>
                <Dropdown as={NavItem} className="mr-auto">
                    <Dropdown.Toggle as={NavLink}>Brands</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(1) }>Guitar Center</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(2) }>Ibanez</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByBrand(3) }>Gibson</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={NavItem} className="mr-auto mr-2">
                    <Dropdown.Toggle as={NavLink}>Department</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(1) }>Guitars</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(2) }>Basses</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.getGuitarsByDepartment(3) }>Amps and Effects</Dropdown.Item>
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
                            <Button variant="info" className="justify-content-end" onClick={(e) => {
                                e.preventDefault();
                                logout();
                                }}>Sign Out</Button>
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