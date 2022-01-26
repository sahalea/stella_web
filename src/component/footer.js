import React from 'react';
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { Icon, Logo } from './';
import LinkedIn from '../assets/images/ic-linkedin.svg';
import FaceBook from '../assets/images/ic-facebook.svg';
import InstaGram from '../assets/images/ic-instagram.svg';
import Apple from '../assets/images/ic-apple.svg';
import Android from '../assets/images/ic-android.svg';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <div className="footer-top">
          <Logo />
          <Row>
            <Col xs={6} sm={3} md={2}>
              <h3>ABOUT</h3>
              <Nav className="flex-column">
                <Nav.Link href="/home">Find a Stella</Nav.Link>
                <Nav.Link eventKey="link-1">Who we are</Nav.Link>
                <Nav.Link eventKey="link-2">Help center</Nav.Link>
                <Nav.Link eventKey="link-2">Lease to Stella Stays</Nav.Link>
                <Nav.Link eventKey="link-2">Blog</Nav.Link>
              </Nav>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <h3>CITIES</h3>
              <Nav className="flex-column">
                <Nav.Link href="/home">Dubai</Nav.Link>
                <Nav.Link eventKey="link-1">Montreal</Nav.Link>
                <Nav.Link eventKey="link-2">Manama</Nav.Link>
              </Nav>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <h3>CONTACT US</h3>
              <Nav className="flex-column">
                <Nav.Link href="/home">WhatsApp</Nav.Link>
                <Nav.Link eventKey="link-1">Email</Nav.Link>
              </Nav>
            </Col>
            <Col xs={6} sm={3} md={6}>
              <Nav className="social">
                <Nav.Link href="/home">
                  <Icon src={Apple} />
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  <Icon src={Android} />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </div>
        <div className="footer-bottom">
          <Row>
            <Col sm={8}>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/home">
                    Copyright © 2021 StellaStays Inc. All rights reserved.
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    Terms and conditions · Privacy policy
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4}>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link href="/">
                    <Icon src={FaceBook} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">
                    <Icon src={LinkedIn} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">
                    <Icon src={InstaGram} />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
