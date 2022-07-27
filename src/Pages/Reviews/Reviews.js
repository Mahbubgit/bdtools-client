import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

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