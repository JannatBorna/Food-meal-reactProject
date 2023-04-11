import React from 'react';
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import img from '../../../images/login2.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Login.css';


const Login = () => {
    const { signInWithGoogle, signInWithGithub, processLogin} = useAuth();
    return (
        <div className="from">
            <>
                <Row>
                    <Col lg={5} md={4} className="input-login">
                        <div className="my-5">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 w-75 mx-auto"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>

                            <Button onClick={processLogin} className="button my-5" variant="primary" type="submit">
                                Log-in
                            </Button>

                            <Link to="/">Forgot password</Link><br />
                            <span>Create a new account <Link to="/register">Register</Link></span><br />

                            <button onClick={signInWithGoogle}    className="online-btn google"><i class="fab fa-google"></i> Google</button>
                            <button className="online-btn facebook" ><i class="fab fa-facebook"></i> Facebook</button>
                            <button className="online-btn twitter"><i class="fab fa-twitter"></i> Twitter</button>
                            <button onClick={signInWithGithub} className="online-btn github"><i class="fab fa-github"></i> Github</button>

                        </div>
                    </Col>

                    <Col lg={7} md={8}>
                       <div>
                            <img className="w-75" src={img} alt="" />
                       </div>

                    </Col>
                </Row>
            </>

          

        </div>
    );
};

export default Login;