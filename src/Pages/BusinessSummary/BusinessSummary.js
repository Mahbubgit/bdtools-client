import React from 'react';
import customer from '../../Images/businessImages/customer.png';
import annualRevenue from '../../Images/businessImages/annual-revenue.png';
import reviews from '../../Images/businessImages/reviews.png';
import tools from '../../Images/businessImages/tools.png';
import Service from './Service';

const BusinessSummary = () => {
    const services = [
        {
            _id: 1, name: 'Customers', quantity: '10K+', img: customer
        },
        {
            _id: 2, name: 'Annual revenue', quantity: '150M+', img: annualRevenue
        },
        {
            _id: 3, name: 'Reviews', quantity: '65K+', img: reviews
        },
        {
            _id: 4, name: 'Tools', quantity: '80+', img: tools
        },
    ]

    return (
        <div>
            <div className='my-2'>
                <div className='text-center'>
                    <h3 className='text-primary font-bold text-4xl'>Business Summary</h3>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;