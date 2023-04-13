import React from 'react';
import Banner from '../Banner/Banner';
// import FoodHeader from '../Foods/FoodHeader/FoodHeader';
import Blog from '../Blog/Blog';
import About from '../About/About';
// import Restaurant from '../Restaurant/Restaurant';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            {/* <FoodHeader /> */}
            {/* <Restaurant /> */}
            <Blog />
        </div>
    );
};

export default Home;