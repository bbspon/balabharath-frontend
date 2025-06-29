// components/NavbarCommon.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/Logo.PNG"; // Update path based on your file structureimport "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../hooks/useAuth";
import "./HomePage.css";

const NavbarCommon = () => {
  const isLoggedIn = useAuth();
  const [showMeet, setShowMeet] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  return (
    <Navbar
      bg="dark"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
      style={{ minHeight: "50px" }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center py-0 text-white fw-bold"
        >
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top me-2"
            style={{ borderRadius: "50%" }} // optional: round logo
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className="text-white px-2 small"
              style={{ color: "" }}
            >
              Home
            </Nav.Link>
            <Nav
              onMouseEnter={() => setShowMeet(true)}
              onMouseLeave={() => setShowMeet(false)}
            >
              <NavDropdown
                show={showMeet}
                title={
                  <span
                    className="navbar-link text-white"
                    style={{
                      color: "#000000",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Meet Bharath
                  </span>
                }
                id="meet-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  href="/his-story"
                  className="navbar-link"
                  style={{
                    color: "#000000",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  His Story
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/ceo-vision"
                  className="navbar-link"
                  style={{
                    color: "#000000",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  CEO with a Vision
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/philosophy"
                  className="navbar-link"
                  style={{
                    color: "#000000",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  His Philosophy
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              href="/businessOpportunities"
              className="text-white px-2 small"
            >
              Business Opportunities
            </Nav.Link>
             <Nav.Link
              href="/services"
              className="text-white px-2 small"
            >
              Our Services
            </Nav.Link>
            <Nav
              onMouseEnter={() => setShowMedia(true)}
              onMouseLeave={() => setShowMedia(false)}
            >
              <NavDropdown
                show={showMedia}
                title={
                  <span
                    className="navbar-link text-white"
                    style={{
                      color: "#000000",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Media
                  </span>
                }
                id="media-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item
                  href="/press"
                  className="navbar-link"
                  style={{
                    color: "#000000",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  Press
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/interviews"
                  className="navbar-link"
                  style={{
                    color: "#000000",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  Interviews
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="/gallery" className="text-white px-2 small">
              Gallery
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white px-2 small">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/collaborate" className="text-white px-2 small">
              Collaborate With Us
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="navbar-link"
              style={{
                color: "white",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </Nav.Link>
            <Nav.Link
              href="https://medium.com/"
              target="_blank"
              className="navbar-link"
              style={{
                color: "white",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              <i className="fab fa-medium fa-lg"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCommon;
