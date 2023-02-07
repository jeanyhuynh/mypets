import React from 'react'
import { Row, Container } from 'react-bootstrap';
import HeaderPage from './Header';
import Footer from './Footer';

const LayoutPage = ({ children }) => (
  <Container fluid>
    <Row >
      <HeaderPage />
      <main className='p-0'>{children}</main>
      <Footer />
    </Row>
  </Container>
)


export default LayoutPage