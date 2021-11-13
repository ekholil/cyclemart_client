import React from 'react';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
   
    return (
        <div>
            
            <Banner />
            <Products />
            <Reviews />
            <Aboutus />
        </div>
    );
};

export default Home;