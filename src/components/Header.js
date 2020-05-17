import React from "react";
// import { Navbar, Nav, Button, Form, FormControl,Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";


class Header extends React.Component {
    render() {
        return (
                <Navbar expand="lg" bg="light">
                    <SearchBar/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="pages-links">
                        <Nav.Item>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/artists">Artists</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );

    }
}


export default Header;