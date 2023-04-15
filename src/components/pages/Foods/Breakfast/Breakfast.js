import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                   {
                       breakfasts.map(breakfast => <Col
                       key={breakfast.id}
                       >
                       
                           <Card>
                               <Card.Img className="w-50 mx-auto" variant="top" src={breakfast.img} />
                               <Card.Body>
                                   <Card.Title>{breakfast.name}</Card.Title>
                                   <Card.Text>
                                       {breakfast.Ingredients?.slice(0, 40)}
                                   </Card.Text>
                                   <Card.Text>
                                       {breakfast.price}
                                   </Card.Text>
                               </Card.Body>
                               
                           </Card>
                       
                      </Col>) 
                       
                    }
               </Row>
           </Container>
        </div>
    );
};

export default Breakfast;    
                       
                       
                       
                       
                       
                       
                       
                       
                  