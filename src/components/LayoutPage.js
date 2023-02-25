import React from 'react'
import { Row, Container } from 'react-bootstrap';
import HeaderPage from './Header';
import Footer from './Footer';

const LayoutPage = (props) => (
  <Container fluid>
    <Row >
      <HeaderPage />
      <main role="main" className='p-0 container'>{props.children}</main>
      <Footer />
    </Row>
  </Container>
)


export default LayoutPage