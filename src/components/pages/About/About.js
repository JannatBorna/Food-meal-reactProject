import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiGlassCelebration, GiDonut, GiHamburger, GiSandwich,GiTacos } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import './About.css';

const About = () => {
    return (
        <div id='about' className='about'>
            <Container >
            <h2>OUR MENU</h2>
            <Row>
                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <GiGlassCelebration className='about-icon'/>
                            <h4>Bread</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <GiDonut className='about-icon'/>
                            <h4>Donut</h4>
                        </a>
                    </div>

                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <GiHamburger className='about-icon'/>
                            <h4>Hamburger</h4>
                        </a>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <CiPizza className='about-icon'/>
                            <h4>Pizza</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <GiSandwich className='about-icon'/>
                            <h4>Sandwich</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/breakfast">
                            <GiTacos className='about-icon'/>
                            <h4>Tacos</h4>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default About;