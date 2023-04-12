import React from 'react';
import './Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Header = () => {


  return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className='navbar'>
      <Container>
        <Navbar.Brand href="/home" className='web-name'>FoodMeal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/home" className='manu'>Home</Nav.Link>
            <Nav.Link href="#about" className='manu'>About</Nav.Link>
            <NavDropdown title="Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="/breakfast" className=''>Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="/lunch" className=''>Lunch</NavDropdown.Item>
              <NavDropdown.Item href="/dinner" className=''>Dinner</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/meals" className='manu'>Meals</Nav.Link>
            <Nav.Link href="#blog" className='manu'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;