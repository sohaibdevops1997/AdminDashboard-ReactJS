import "../styles/NavBar.css";
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Collapse,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import ThemeSwitcher from "../theme/ThemeSwitcher";
import logo from "../assets/logo.png";

function NavBar() {
  const [openHome, setOpenHome] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openPricing, setOpenPricing] = useState(false);
  return (
    <Navbar className="navbar-vertical" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Item>
            <Button
              onClick={() => setOpenHome(!openHome)}
              aria-controls="home-collapse"
              aria-expanded={openHome}
              className="nav-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
              </svg>{" "}
              Home
              <i className={`bi bi-chevron-${openHome ? 'up' : 'down'}`} style={{ marginLeft: '120px' }} ></i>
            </Button>
            <Collapse in={openHome}>
              <Nav className="flex-column" id="home-collapse">
                <Nav.Link as={Link} to="/" className="child-nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Add Personnel Info
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/generatePDFReport"
                  className="child-nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Generate Report
                </Nav.Link>
              </Nav>
            </Collapse>
          </Nav.Item>

          <Nav.Item>
            <Button
              onClick={() => setOpenFeatures(!openFeatures)}
              aria-controls="features-collapse"
              aria-expanded={openFeatures}
              className="nav-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-amd"
                viewBox="0 0 16 16"
              >
                <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z" />
              </svg>{" "}
              Features
              <i className={`bi bi-chevron-${openHome ? 'up' : 'down'}`} style={{ marginLeft: '102px' }} ></i>
            </Button>
            <Collapse in={openFeatures}>
              <Nav className="flex-column" id="features-collapse">
                <Nav.Link as={Link} to="/features" className="child-nav-link">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Subfeature 1
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/features/subfeature2"
                  className="child-nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Subfeature 2
                </Nav.Link>
              </Nav>
            </Collapse>
          </Nav.Item>
          <Nav.Item>
            <Button
              onClick={() => setOpenPricing(!openPricing)}
              aria-controls="pricing-collapse"
              aria-expanded={openPricing}
              className="nav-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bank2"
                viewBox="0 0 16 16"
              >
                <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z" />
              </svg>{" "}
              Pricing
              <i className={`bi bi-chevron-${openHome ? 'up' : 'down'}`} style={{ marginLeft: '115px' }} ></i>
            </Button>
            <Collapse in={openPricing}>
              <Nav className="flex-column" id="pricing-collapse">
                <Nav.Link
                  as={Link}
                  to="/pricing/subpricing1"
                  className="child-nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Subpricing 1
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/pricing/subpricing2"
                  className="child-nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                  Subpricing 2
                </Nav.Link>
              </Nav>
            </Collapse>
          </Nav.Item>
        </Nav>
        <div className="theme-switcher-container">
          <ThemeSwitcher />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
