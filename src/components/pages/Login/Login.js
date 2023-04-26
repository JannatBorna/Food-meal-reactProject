import React from 'react';
import { Container ,Row, Col } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import './Login.css';


const Login = () => {
    
    const { signInWithGoogle, signInWithGithub } = useAuth();

    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}className="input-login">
                        <div className="sign">
                            <label className='email'>Email :</label>
                            <input type="email" name="email" /> <br/>
                            <label className='my-5 m-1'>Password :</label>
                            <input type="password" name="password" /> <br />
                            <button className='sign-btn'>SIGN IN</button>
                            <div className='mt-4'>
                                <p>New user - <a href="/register">Register</a> Now</p>
                                <button className='google-btn'onClick={signInWithGoogle}><FcGoogle/> Google</button>
                                <button className='github-btn mx-3' onClick={signInWithGithub}><BsGithub /> Github</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;