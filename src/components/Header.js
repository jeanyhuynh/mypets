import { Nav, Navbar, NavDropdown, Image, Button, Container, Form } from 'react-bootstrap';
import IMAGES from '../assets/images';

function HeaderPage() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image className='logo' src={IMAGES.logo} alt='' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Gallery</Nav.Link>
            <NavDropdown title="Foods" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nut</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bone
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Fish
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Fashion
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
    </Navbar>
  );
}

export default HeaderPage;