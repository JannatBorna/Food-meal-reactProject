import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Shop />
            <Blog />
        </div>
    );
};

export default Home;