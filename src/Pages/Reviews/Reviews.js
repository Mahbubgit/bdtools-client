import React from 'react';
import Review from './Review';
import client1 from '../../Images/clients/client1.png';
import client2 from '../../Images/clients/client2.png';
import client3 from '../../Images/clients/client3.png';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Ninja',
            review: 'We are very happy to get such a wonderful vendor!',
            location: 'Canada',
            post: 'March 2022',
            img: client1
        },
        {
            _id: 2,
            name: 'Mr. Tom',
            review: 'We are very lucky to find you, a reliable tools manufacturer.',
            location: 'Sweden',
            post: 'February 2022',
            img: client2
        },
        {
            _id: 3,
            name: 'Mr. Alex',
            review: 'Reliable and great service! We will again select you in future.',
            location: 'California',
            post: 'January 2022',
            img: client3
        },
    ]

    return (
        <div>
            <section className='my-16'>
                <h2 className='text-5xl font-bold text-primary text-center'>Our Valuable Clients Say</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Reviews;