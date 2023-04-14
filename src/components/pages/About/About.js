import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { GiGlassCelebration, GiDonut, GiHamburger, GiSandwich,GiTacos } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import './About.css';

const About = () => {
    return (
        <div id='about' className='about'>
            <Row>
                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <GiGlassCelebration className='about-icon'/>
                            <h4>Bread</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <GiDonut className='about-icon'/>
                            <h4>Donut</h4>
                        </a>
                    </div>

                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <GiHamburger className='about-icon'/>
                            <h4>Hamburger</h4>
                        </a>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <CiPizza className='about-icon'/>
                            <h4>Pizza</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <GiSandwich className='about-icon'/>
                            <h4>Sandwich</h4>
                        </a>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={12}>
                    <div className='element'>
                        <a href="/">
                            <GiTacos className='about-icon'/>
                            <h4>Tacos</h4>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;