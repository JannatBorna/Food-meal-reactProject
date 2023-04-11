import React from 'react';
import Banner from '../Banner/Banner';
import FoodHeader from '../Foods/FoodHeader/FoodHeader';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodHeader />
            <Blog />
        </div>
    );
};

export default Home;