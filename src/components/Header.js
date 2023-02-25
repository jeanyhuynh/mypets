import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Image, Button, Container, Form } from 'react-bootstrap';
import IMAGES from '../assets/images';

function HeaderPage() {
  const [navDropdownActive, setNavDropdownActive] = useState(false);
  const handleNavDropdown = (eventKey) => {
    setNavDropdownActive(eventKey)
  }
  return (
    <Navbar bg="light" expand="lg" className='cus-nav' onSelect={handleNavDropdown} sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <Image className='logo' src={IMAGES.logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '135px' }}
            navbarScroll
          >
            <Nav.Link className='cus-nav-link' href="/" eventKey={2}>Home</Nav.Link>
            <Nav.Link href="/gallery" eventKey={3}>Gallery</Nav.Link>
            <NavDropdown title="Foods" id="navbarScrollingDropdown" className={[['sub-1', 'sub-2', 'sub-3'].includes(navDropdownActive) && 'active', 'cus-dropdown']} >
              <NavDropdown.Item href="#action3" eventKey={'sub-1'}>Nut</NavDropdown.Item>
              <NavDropdown.Item href="#action4" eventKey={'sub-2'}>
                Bone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" eventKey={'sub-3'}>
                Deal
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6" eventKey={5}>
              Deal
            </Nav.Link>
            <Nav.Link href="/guides" eventKey={6}>
              Guides
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default HeaderPage;