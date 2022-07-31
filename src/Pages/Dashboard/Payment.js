import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LIFnbHZwCB43McyiuTRF7CGtPhnV0gJwbIM8hgif6xJfQYQYC4kuy2XE62MhiaMRwY1B9tqkiwma1c1uw2qE3H500e53tE6vf');
// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


const Payment = () => {
    const { id } = useParams();
    const url = `https://calm-lake-97858.herokuapp.com/order/${id}`;

    const { data: paymentOrder, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div className="mx-auto card w-50 max-w-md bg-base-200 shadow-2xl my-12">
                <div className="card-body items-center text-center">
                    <p className='text-primary font-bold'>Hello, {paymentOrder.email}</p>
                    <h2 className="card-title">Please pay for {paymentOrder.orderItem}: ${paymentOrder.orderPrice}</h2>
                    <p>Order Details: <span className='text-orange-700 font-bold'>{paymentOrder.orderQuantity} pieces {paymentOrder.orderItem} </span>
                        at price $<span className='text-purple-700 font-bold'>{paymentOrder.orderPrice}</span>
                        <br />
                        Address: {paymentOrder.address} <br />
                        Phone: {paymentOrder.phone}
                    </p>
                    <Link to={'/dashboard/myOrders'} className='btn btn-primary'>Cancel</Link>
                </div>
            </div>
            <div className="mx-auto card w-50 max-w-md shadow-2xl bg-base-200">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentOrder={paymentOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;