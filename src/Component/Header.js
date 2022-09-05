import Image from "next/image";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icon from "../assets/icon.png";

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className=" shadow p-3  bg-white "
      style={{ paddingTop: 30 }}
    >
      <Container>
        <Navbar.Brand href="#" style={{ marginRight: 30 }}>
          <Image src={icon} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{
                marginRight: 30,
                color: "#272727",

                fontFamily: "Poppins",
              }}
            >
              STATS
            </Nav.Link>
            <Nav.Link
              href="#action1"
              style={{
                marginRight: 30,
                color: "#272727",

                fontFamily: "Poppins",
              }}
            >
              FLOOD
            </Nav.Link>
            <Nav.Link
              href="#action1"
              style={{
                marginRight: 30,
                color: "#272727",

                fontFamily: "Poppins",
              }}
            >
              GUIDELINES
            </Nav.Link>
            <Nav.Link
              href="#action1"
              style={{
                marginRight: 30,
                color: "#272727",

                fontFamily: "Poppins",
              }}
            >
              WE CARE
            </Nav.Link>
            <Nav.Link
              href="#action1"
              style={{
                marginRight: 30,
                color: "#272727",

                fontFamily: "Poppins",
              }}
            >
              CONTACT
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="outline-danger"
              style={{ width: 150, fontSize: 15 }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
