import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img width={100} src={service.img} alt="Business Summary" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='text-5xl text-neutral font-bold'>{service.quantity}</p>
                <h2 className="card-title text-primary">{service.name}</h2>
            </div>
        </div>
    );
};

export default Service;