import React from 'react';
import NewTool from '../../Images/newMasonryProducts.png';

const NewTools = () => {
    return (
        <section className='my-2'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={NewTool} className="max-w-sm rounded-lg shadow-2xl" alt='New Tools' />
                    <div>
                        <h1 className="text-5xl font-bold text-primary text-left">New Tools Coming!</h1>
                        <p className="py-6 text-left">We are manufacturing more new tools as our valuable clients need. Here we describe about our new tools.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewTools;