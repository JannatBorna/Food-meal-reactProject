import React from 'react';

import { NavLink } from 'react-router-dom';
//import { HashLink } from 'react-router-hash-link';
import './Foodheader.css'


const FoodHeader = () => {
    const selected = {
        fontWeight: "bold",
        color: "red",
        borderBottom: "3px solid red"
    }
    return (
       <div className="food-header my-5">
            <NavLink to="/breakfast#breakfast" activeStyle={selected}>Breakfast</NavLink>
            <NavLink to="/lunch#lunch" activeStyle={selected}>Lunch</NavLink>
            <NavLink to="/dinner#dinner" activeStyle={selected}>Dinner</NavLink>
        </div>
    );
};

export default FoodHeader;