import React, { Component } from "react";
import {Button, Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./headers.css";

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         logged_in: props.logged_in
    //     };
    // }

    render() {
        let header;
        if (!this.props.logged_in) {
            header = (
                <Navbar bg="dark" variant="dark" expand="lg" sticky={"top"}>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand>WinDrop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to={"/"}>
                                {/*<Nav.Link eventKey={"home"} onSelect={()=>this.props.onReq("home")}>Home</Nav.Link>*/}
                                <Nav.Link eventKey={"home"} href={"/"}>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/faq"}>
                                {/*<Nav.Link eventKey={"faq"} onSelect={()=>this.props.onReq("faq")}>FAQs</Nav.Link>*/}
                                <Nav.Link eventKey={"faq"} href={"/faq"}>FAQs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/about"}>
                                {/*<Nav.Link eventKey={"about"} onSelect={()=>this.props.onReq("about")}>About</Nav.Link>*/}
                                <Nav.Link eventKey={"about"}>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav fill={true} className="justify-content-end">
                            <LinkContainer to={"/login"}>
                                {/*<Button variant={"outline-primary"} onClick={()=>this.props.onReq("login")}>Login</Button>*/}
                                <Button variant={"outline-primary"}>Login</Button>
                            </LinkContainer>
                            <LinkContainer to={"/sign_up"}>
                                {/*<Button variant={"primary"} onClick={()=>this.props.onReq("sign_up")}>Sign-up</Button>*/}
                                <Button variant={"primary"}>Sign-up</Button>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        else{
            header = (
                <Navbar bg="dark" variant="dark" expand="lg" sticky={"top"}>
                    {/*<Container fluid={true}>*/}
                        <LinkContainer to={"/"}>
                            <Navbar.Brand>WinDrop</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav defaultActiveKey={"home"} className="mr-auto">
                                <LinkContainer to={"/"}>
                                    {/*<Nav.Link eventKey={"home"} onSelect={()=>this.props.onReq("home")}>Home</Nav.Link>*/}
                                    <Nav.Link eventKey={"home"} href={"/"}>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"/faq"}>
                                    {/*<Nav.Link eventKey={"faq"} onSelect={()=>this.props.onReq("faq")}>FAQs</Nav.Link>*/}
                                    <Nav.Link eventKey={"faq"} href={"/faq"}>FAQs</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"/about"}>
                                    {/*<Nav.Link eventKey={"about"} onSelect={()=>this.props.onReq("about")}>About</Nav.Link>*/}
                                    <Nav.Link eventKey={"about"}>About</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav fill={true} className={"justify-content-end"}>
                                <NavDropdown eventKey={1} id="basic-nav-dropdown" drop={"down"}
                                title={
                                    <Image dir={"public/logo192.png"} alt={"user pic"}/>
                                }>

                                    <NavDropdown.Item eventKey={1.1} href="#profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={1.2} href={"/"} onClick={()=>this.props.onReq("false")}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    {/*</Container>*/}
                </Navbar>
            );
        }
        return (
            header
        );
    }
}

export { Header };