import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";
import { BsBasket2, BsSuitHeart } from "react-icons/bs";



const Dinner = () => {
    const [dinners, setDinners] = useState([]);

    useEffect( ()=> {
        fetch('/dinner.json')
        .then(res => res.json())
        .then(data => setDinners(data))
    }, [])
    return (
        <div className="foods my-5">
              <h2 className='mb-5'>
                    <a href="/breakfast"><IoMdArrowDropleftCircle/></a> DINNER <a href="/lunch"><IoMdArrowDroprightCircle/></a>
               </h2>
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        dinners.map(dinner => <Col
                            key={dinner.id}
                        >
                            <Card className='food'>
                                <div className='food-div'>
                                    <p className='hot'>Hot</p>
                                    <img className="w-50 mx-auto" src={dinner.img} alt=''/>
                                        <div className='food-text'>
                                            <div className='d-flex'>
                                                <h6>{dinner.price}</h6>
                                                <p className='food-star'>
                                                    <ReactStars
                                                    size={20}
                                                    value= {dinner.review}
                                                    edit={false}
                                                />
                                                <small className='reviewNum'>({dinner.reviewNum})</small>
                                                </p>
                                            </div>
                                         <h4>{dinner.name}</h4>
                                        </div>
                                        <div className='middle'>
                                            <h4><a href="0"><BsBasket2 /></a></h4>
                                            <h4> <a href="0"><BsSuitHeart /></a></h4>
                                        </div>
                            </div>
                           </Card>

                        </Col>)

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Dinner;