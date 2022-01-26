import React, {useState} from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Logo } from "./";

const Header = () => {

  const [offset, setOffset] = useState(false);

  window.addEventListener('scroll',() => setOffset(window.scrollY > 120 ? true : false));

  return (
    <header className={`header ${offset}`}>
      <Navbar expand="sm" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="btn-help">Help Center</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
              <NavDropdown title="TT" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
