import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import shop1 from '../../images/others/shop-1.png';
import shop2 from '../../images/others/shop-2.png';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop' id='about'>
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12}>
                        <div className='shop1 d-flex'>
                            <div className='shop-text text-start'>
                                <h2>FAST FOOD</h2>
                                <h5 className='my-4'>QUICK PROCESSING, DELICIOUS TASTE</h5>
                                <a href="/meals">
                                    shop
                                </a>
                            </div>
                            <div className='img'>
                                <img src={shop1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12}>
                        <div className='shop2 d-flex'>
                            <div className='shop-text text-start'>
                                <h2>MEXICAN FOOD</h2>
                                <h5 className='my-4'>QUICK PROCESSING, DELICIOUS TASTE</h5>
                                <a href="/meals">
                                    shop
                                </a>
                            </div>
                            <div className='img'>
                                <img src={shop2} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;