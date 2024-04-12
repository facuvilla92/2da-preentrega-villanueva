import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
    <>
   <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">LO DE PITU</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">inicio</Nav.Link> */}
            <Nav.Link to="/category/vacuna" as={NavLink}>vacuna</Nav.Link>
            <Nav.Link to="/category/pollo" as={NavLink}>pollo</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
   
    </>
    )
}