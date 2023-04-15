import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const { order } = props;

    // const countReducer = (previous, meal) => previous + meal.quantity;
    // const count = order.reduce(countReducer, 0);

    const count = order.reduce((previous, meal) => previous + meal.quantity, 0);

    // let count = 0;
    // for (const meal of order) {
    //     count = count + meal.quantity;
    // }

    console.log(order);

    return (
        <div className='order'>
            <h2>Order List</h2>
            <h6>Items Ordered: {count}</h6>
        </div>
    );
};

export default OrderList;