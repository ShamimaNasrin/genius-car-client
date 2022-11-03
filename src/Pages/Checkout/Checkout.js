import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    console.log(service);

    return (
        <div>
            <h1>{service.title}</h1>
        </div>
    );
};

export default Checkout;