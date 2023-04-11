import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Dinner.css'

const Dinner = () => {
    const [dinners, setDinners] = useState([]);

    useEffect( ()=> {
        fetch('/dinner.json')
        .then(res => res.json())
        .then(data => setDinners(data))
    }, [])
    return (
        <div className="dinner">
            
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        dinners.map(dinner => <Col
                            key={dinner.id}
                        >

                            <Card className="shadow">
                                
                                <Card.Img className="w-50 mx-auto" variant="top" src={dinner.img} />
                                <Card.Body>
                                    <Card.Title>{dinner.name}</Card.Title>
                                    <Card.Text>
                                        {dinner.Ingredients?.slice(0, 40)}
                                    </Card.Text>
                                    <Card.Text>
                                        {dinner.price}
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

export default Dinner;