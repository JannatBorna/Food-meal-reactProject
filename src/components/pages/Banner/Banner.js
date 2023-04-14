import React from 'react';
import './Banner.css';
// import { } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <div className='banner-text'>
                <h1 className='text-white'>Best food <span>waiting for your belly</span></h1>
                <h4 className='text-white'>Eat fruit when you want something sweet</h4>
                <p className='text-white'>Healthy eating is something that we all aspire to, but it isn’t always easy <br />  to put it into practice! Whether healthy eating, let the <br /> best of intentions fall by the wayside. </p>
                <a href="/seemore">SEE MORE</a>
            </div>
        </div>
    );
};

export default Banner;