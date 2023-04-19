import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { IoMdArrowDropleftCircle,IoMdArrowDroprightCircle } from "react-icons/io";

const Lunch = () => {
     const [lunchs, setLunchs] = useState([]);

     useEffect(() => {
         fetch('/lunch.json')
         .then(res => res.json())
         .then(data => setLunchs(data))
     },[])

    return (
        <div className="foods my-5">
              <h2 className='mb-5'>
                    <a href="/breakfast"><IoMdArrowDropleftCircle/></a> LUNCH <a href="/dinner"><IoMdArrowDroprightCircle/></a>
               </h2>
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        lunchs.map(lunch => <Col
                            key={lunch.id}
                        >
                            <Card>
                               <img className="w-50 mx-auto" src={lunch.img} alt=''/>
                                <div className='foods-text'>
                                    <div className='d-flex'>
                                        <h6>{lunch.price}</h6>
                                        <p className='food-start'>
                                            <ReactStars
                                            size={20}
                                            value= {lunch.review}
                                            edit={false}
                                        />
                                        <small className='reviewNum'>({lunch.reviewNum})</small>
                                        </p>
                                    </div>
                                 <h4>{lunch.name}</h4>
                                </div>
                           </Card>

                        </Col>)

                    }
                </Row>
            </Container>
        </div>
    );
};

export default Lunch;