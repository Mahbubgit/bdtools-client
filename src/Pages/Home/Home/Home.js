import React from 'react';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import Reviews from '../../Reviews/Reviews';
import Tools from '../../Tools/Tools';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* <h2 className='text-4xl text-primary font-bold'>Reliable Tools Manufacturer Since 1995</h2> */}
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;