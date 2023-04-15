import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Lunch = () => {
     const [lunchs, setLunchs] = useState([]);

     useEffect(() => {
         fetch('/lunch.json')
         .then(res => res.json())
         .then(data => setLunchs(data))
     },[])

    return (
        <div className="foods my-5">
            
            <Container>
                <Row lg={3} md={2} xs={1} className="g-4">
                    {
                        lunchs.map(lunch => <Col
                            key={lunch.id}
                        >

                            <Card>

                                <Card.Img className="w-50 mx-auto" variant="top" src={lunch.img} />
                                <Card.Body>
                                    <Card.Title>{lunch.name}</Card.Title>
                                    <Card.Text>
                                        {lunch.Ingredients?.slice(0, 40)}
                                    </Card.Text>
                                    <Card.Text>
                                        {lunch.price}
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

export default Lunch;