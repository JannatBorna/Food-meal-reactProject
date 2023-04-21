import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Shop from '../Shop/Shop';
import HomeFood from '../HomeFood/HomeFood';
import BannerTwo from '../BannerTwo/BannerTwo';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Shop />
            <HomeFood />
            <BannerTwo />
            <Blog />
        </div>
    );
};

export default Home;