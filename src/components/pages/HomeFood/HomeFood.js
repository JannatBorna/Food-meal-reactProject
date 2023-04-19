import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { BsBasket2, BsSuitHeart } from "react-icons/bs";
import'./HomeFood.css';



const HomeFood = () => {
    const [ homeFoods, setHomeFoods ] = useState ([]);
     const [limit, setLimit] = useState(4);

    useEffect(() =>{
        fetch('/breakfast.json')
        .then(res => res.json())
        .then(data => setHomeFoods(data))

    }, [])
    return (
    <div className="foods my-5">
            
            <Container>
                <Row lg={4} md={2} xs={1} className="g-4">
                   {
                       homeFoods.slice(0, limit ? limit : homeFoods.length).map(homeFood => <Col
                       key={homeFood.id}
                       setLimit={setLimit}
                       >
                       
                           <Card className='food'>
                                <div className='food-div'>
                                    <p className='hot'>Hot</p>
                                    <img className="w-50 mx-auto" src={homeFood.img} alt=''/>
                                        <div className='food-text'>
                                            <div className='d-flex'>
                                                <h6>{homeFood.price}</h6>
                                                <p className='ReactStars'>
                                                    <ReactStars
                                                    size={20}
                                                    value= {homeFood.review}
                                                    edit={false}
                                                />
                                                <small className='reviewNum'>({homeFood.reviewNum})</small>
                                                </p>
                                            </div>
                                         <h4>{homeFood.name}</h4>
                                        </div>
                                        <div className='middle-home'>
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

export default HomeFood;