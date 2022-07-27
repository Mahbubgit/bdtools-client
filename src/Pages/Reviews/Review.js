import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mt-3 mr-5">
                                <img src={review.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl text-left text-primary'>Rating: {review.rating}</h4>
                            <h4 className='text-xl text-left'>{review.name}</h4>
                            <p className='text-left'>{review.location}</p>
                            <p className='text-left'>{review.post}</p>
                        </div>
                    </div>
                    <p className='text-xl my-4'>{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;