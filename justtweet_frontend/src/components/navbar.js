import React from "react";
import { Container, Form, Button, Nav, Navbar } from 'react-bootstrap';

// navbar adapted from: https://react-bootstrap.github.io/components/navbar/

function TweetNavbar() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">JustTweet</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Moments</Nav.Link>
              <Nav.Link href="#" disabled>Notifications</Nav.Link>
              <Nav.Link href="#action3">Messages</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Twitter"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary" style={{ color: 'white'}}>Tweet</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default TweetNavbar;