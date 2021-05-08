import React from 'react'
import {Navbar,Nav,NavDropdown,Image} from "react-bootstrap"
import logo from "../img/webify_logo.png"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link, animateScroll as scroll } from "react-scroll";



function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">
                    
                        <Image
                            alt=""
                            src= {logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Webify
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <MoreHorizIcon/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">
                              Features
                        </Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#intro">About us</Nav.Link>
                        <Nav.Link href="#memes">
                            Our Work
                        </Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

            

        </div>
    )
}

export default Header
