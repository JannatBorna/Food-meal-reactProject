import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {  FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import {  BsDribbble } from "react-icons/bs";
import './Footer.css';



const Footer = () => {
    return (
    <div id='footer'>
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <div className='footer'>
                        <h2>OPENING HOURS</h2>
                        <p>Monday – Thu: 10:00 Am – 01:00 Am</p>
                        <p>Tuesday – Thu: 10:00 Am – 01:00 Am</p>
                        <p>Saturday: 11:00 Am To Midnight</p>
                        <p>Sunday: Kitchen Closed</p>
                    </div>
                </Col>
                <Col lg={5} md={6} sm={12}>
                    <div className='footer-mid'>
                        <h2>LET'S STAY IN TOUCH</h2>
                        <p>Join our e-club to get the latest news!</p>
                        <input type="email" name="email" placeholder='Your Email...'/>
                        <button type="submit">Subscribe</button>
                        <div>
                            <FaFacebookF className='footer-icon'/>
                            <FaTwitter className='mx-4 my-4 footer-icon'/>
                            <FaInstagram className='footer-icon'/>
                            <BsDribbble className='mx-4 my-4 footer-icon'/>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={12} sm={12}>
                    <div className='footer-end'>
                        <h2>MENU LINKS</h2>
                        <p>Family Bucket Meals</p>
                        <p>Fried Chicken</p>
                        <p>Mexican food</p>
                        <p>Burgers</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;