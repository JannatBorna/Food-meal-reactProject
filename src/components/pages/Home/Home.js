import React from 'react';
import About from '../About/About';
import FoodHeader from '../Foods/FoodHeader/FoodHeader';
import FoodsRoute from '../Foods/FoodsRoute/FoodsRoute';


const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <About />
            <FoodHeader />
            <FoodsRoute />
            
        </div>
    );
};

export default Home;