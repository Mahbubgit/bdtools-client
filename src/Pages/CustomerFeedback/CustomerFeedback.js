import React from 'react';
import weAreTheBest from '../../Images/we-are-the-best.png';
import HandTools from '../../Images/HandTools.png';

const CustomerFeedback = () => {
    return (
        <div>
            <section className='my-10'>
                    <h1 className="text-5xl font-bold text-primary text-center mb-5">Why We Are The Best?</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={weAreTheBest} className="max-w-sm rounded-lg shadow-2xl" alt='New Tools' />
                        <div className='m-5'>
                            <h1 className="text-2xl font-bold text-gray-500 text-left">Because -</h1>
                            <ul className='text-left'>
                                <li>
                                    1. We understand customer need.
                                </li>
                                <li>
                                    2. Produce always new product to satisfy our customer need.
                                </li>
                                <li>
                                    3. Proper customer feedback using live chat. Live chat is one of the most popular ways of getting feedback from your customers.
                                </li>
                                <li>
                                    4. Using Social Channels, Polls and Surveys.
                                </li>
                                <li>
                                    5. Monitor Feedback on Other Sites.
                                </li>
                                <li>
                                    6. Analyze On-site activity.
                                </li>
                                <li>
                                    7. Create a group and E-mails support to our valuable customer.
                                </li>
                            </ul>
                        </div>
                        <img src={HandTools} className="max-w-sm rounded-lg shadow-2xl" alt='New Tools' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerFeedback;