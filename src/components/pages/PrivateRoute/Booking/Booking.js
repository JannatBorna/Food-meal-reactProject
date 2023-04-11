import React from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { breakfastId } = useParams();

    return (
        <div>
            <h1>This is Booking: {breakfastId}</h1>
        </div>



    );
};

export default Booking;