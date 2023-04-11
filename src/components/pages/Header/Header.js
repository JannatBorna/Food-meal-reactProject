import React from 'react';
import {Navbar, Container,  Nav,  Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar color="white" bg="dark" expand="lg"
         > 
                  
       
        <Container fluid>
                <Navbar.Brand  href="#"><span className="fw-bolder text-danger">Martial arts</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
      <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px'}}
          navbarScroll
      >
        <Stack direction="horizontal" gap={5}>
            <NavLink
               to="/home"
                activeStyle={{
                 
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "20px",
                  textDecoration: "none"
                  }}
               >
             Home
           </NavLink>

           <NavLink
              to="/about"
                  activeStyle={{
                     fontWeight: "bold",
                     color: "white",
                     fontSize: "20px",
                     textDecoration: "none"
                     }}
                     >
           About
           </NavLink>

           <NavLink
              to="/services"
                  activeStyle={{
                     fontWeight: "bold",
                     color: "white",
                     fontSize: "20px",
                     textDecoration: "none"
                     }}
                     >
           Services
           </NavLink>

           <NavLink
              to="/login"
                  activeStyle={{
                     fontWeight: "bold",
                     color: "white",
                     fontSize: "20px",
                     textDecoration: "none"
                     }}
                     >
           Login
           </NavLink>


        </Stack>
    </Nav>
        
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;