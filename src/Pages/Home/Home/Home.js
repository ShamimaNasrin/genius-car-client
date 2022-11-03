import React, { useEffect } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;