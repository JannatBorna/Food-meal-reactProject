import React from 'react';
import { Container ,Row, Col } from 'react-bootstrap';
// import useAuth from '../../hook/useAuth';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
    // const { signInWithGoogle, signInWithGithub, processLogin} = useAuth();
    return (
            <div className='my-5'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}className="input-login">
                    <div className="sign">
                        <label className='email'>Name :</label>
                        <input type="name" name="name" /> <br/>
                        <label className='my-4 email'>Email :</label>
                        <input type="email" name="email" /> <br/>
                        <label className='m-1'>Password :</label>
                        <input type="password" name="password" /> <br />
                        <label className='m-1  my-4'> Re-Password :</label>
                        <input type="re-password" name="re-password" /> <br />
                        <button className='sign-btn mt-2'>SIGN IN</button>
                        <div className='mt-3'>
                            <p>All ready have account - <a href="/login">Login</a> Now</p>
                            <button className='google-btn'><FcGoogle/> Google</button>
                            <button className='github-btn mx-3'><BsGithub /> Github</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Register;