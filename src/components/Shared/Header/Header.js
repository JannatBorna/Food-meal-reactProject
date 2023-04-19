import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BiUserCircle } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";



const Header = () => {


  return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className='navbar'>
      <Container>
        <Navbar.Brand href="/home" className='web-name'>FoodMeal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="/home" className='manu'>Home</Nav.Link>
            <Nav.Link href="#about" className='manu mx-3'>About</Nav.Link>
            <Nav.Link href="#blog" className='manu'>Blog</Nav.Link>
            <Nav.Link href="/breakfast" className='manu mx-3'>Meals</Nav.Link>
            <Nav.Link href="/meals" className='manu'>Shop</Nav.Link>
            {/* <NavDropdown title="Food" id="basic-nav-dropdown" className='mx-3'> */}
              {/* <div className='bg-dark'> */}
                {/* <NavDropdown.Item href="/breakfast" className='text-white dropdown'>Breakfast</NavDropdown.Item> */}
                {/* <NavDropdown.Item href="/lunch" className='text-white dropdown'>Lunch</NavDropdown.Item> */}
                {/* <NavDropdown.Item href="/dinner" className='text-white dropdown'>Dinner</NavDropdown.Item> */}
              {/* </div> */}
            {/* </NavDropdown> */}
          </Nav>

           <Nav>

              <a href="/meals" className='text-decoration-none'>
                <BsCart4  className='fa-2x cart fs-5'/>
              </a>

              <a href="/profile" className='mx-4 text-decoration-none'>
                 <BiUserCircle  className='cart fs-5'/>
              </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};
export default Header;