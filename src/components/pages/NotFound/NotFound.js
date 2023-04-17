import React from 'react';
import './NotFound.css';
import { Col, Container, Row } from 'react-bootstrap';
import { VscArrowRight } from "react-icons/vsc";

const NotFound = () => {
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className='notfound'> 
                            <h1>404</h1>
                            <h3>Oops! That page can't be found.</h3>
                            <h6>&mdash;</h6>
                            <p>We're really sorry but we can't seem to find <br />the page you were looking for.</p>
                            <a href="/" className='my-2'>BACK THE HOMEPAGE <VscArrowRight/> </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;