import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";
import { BsBasket2, BsSuitHeart } from "react-icons/bs";

import './Breakfast.css'

const Breakfast = () => {
      const [breakfasts, setBreakfasts] = useState([])

      useEffect( () =>{
           fetch('/breakfast.json')
           .then(res => res.json())
           .then(data =>setBreakfasts(data))

      }, [])



    return (
        <div className="foods my-5">
            <h2 className='mb-5'>
                <a href="/dinner"><IoMdArrowDropleftCircle/></a> BREAKFAST <a href="/lunch"><IoMdArrowDroprightCircle/></a>
            </h2>
            
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                   {
                       breakfasts.map(breakfast => <Col
                       key={breakfast.id}
                       >
                       
                           <Card className='food'>
                                <div className='food-div'>
                                    <p className='hot'>Hot</p>
                                    <img className="w-50 mx-auto" src={breakfast.img} alt=''/>
                                        <div className='food-text'>
                                            <div className='d-flex'>
                                                <h6>{breakfast.price}</h6>
                                                <p className='food-star'>
                                                    <ReactStars
                                                    size={20}
                                                    value= {breakfast.review}
                                                    edit={false}
                                                />
                                                <small className='reviewNum'>({breakfast.reviewNum})</small>
                                                </p>
                                            </div>
                                         <h4>{breakfast.name}</h4>
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

export default Breakfast;    
                       
                       
                       
                       
                       
                       
                       
                       
                  