import React from 'react';
import { Container ,Row, Col } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {

    return (
            <div className='my-5'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}className="input-login">
                    <div className="sign">
                        {/* <label className='email'>Name :</label> */}
                        {/* <input type="name" name="name" /> <br/> */}
                        {/* <label className='my-4 email'>Email :</label> */}
                        {/* <input type="email" name="email" /> <br/> */}
                        {/* <label className='m-1'>Password :</label> */}
                        {/* <input type="password" name="password" /> <br /> */}
                        {/* <label className='m-1  my-4'> Re-Password :</label> */}
                        {/* <input type="re-password" name="re-password" /> <br /> */}
                        {/* <button className='sign-btn mt-2'>SIGN IN</button> */}
                        {/* <div className='mt-3'> */}
                        
                            <button className='auth-btn'><FcGoogle/> Google</button>
                            <button className='auth-btn mt-3'><BsGithub /> Github</button>
                            <p className='mt-4'>All ready have account - <a href="/login">Login</a> Now</p>
                        </div>
                    {/* </div> */}
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Register;