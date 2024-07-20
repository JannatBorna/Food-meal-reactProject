import React from 'react';
import { Container ,Row, Col } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import './Login.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

const location = useLocation();
const navigate = useNavigate();
    
//   const [loginData, setLoginData] = useState({});
//   const location = useLocation();
//   const navigate = useNavigate();
  const {signInWithGoogle, signInWithGithub  } = useAuth();


//   const handleLoginSubmit = e => {
    //   loginUser(loginData.email, loginData.password, location, navigate);
    //   e.preventDefault();
//   }

  const handleGoogleSign = () => {
      signInWithGoogle(location, navigate)
  }

  const handleGithubSign = () => {
      signInWithGithub(location, navigate)
  }

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
                                <button className='google-btn'onClick={handleGoogleSign}><FcGoogle/> Google</button>
                                <button className='github-btn mx-3' onClick={handleGithubSign}><BsGithub /> Github</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;