import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyOrders.css';
import DeleteConfirmModal from '../Shared/DeleteConfirm/DeleteConfirmModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const [deleteOrder, setDeleteOrder] = useState(null);
    // console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`https://calm-lake-97858.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate("/");
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user]);

    return (
        <div>
            <div>
                <h2>My Total Order: {orders.length}</h2>
                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Order Item</th>
                                <th>Image</th>
                                <th>Order Quantity</th>
                                <th>Order Price</th>
                                <th>Payment</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((a, index) =>
                                    <tr key={a._id} className='trOrder'>
                                        <td>{index + 1}</td>
                                        <td>{a.email}</td>
                                        <td>{a.address}</td>
                                        <td>{a.phone}</td>
                                        <td>{a.orderItem}</td>
                                        <td>{a.img}</td>
                                        <td>{a.orderQuantity}</td>
                                        <td>{a.orderPrice}</td>
                                        <td>
                                            {(a.orderPrice && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-primary text-white h-6 w-20'>Pay Now</button></Link>}
                                            {(a.orderPrice && a.paid) && <div>
                                                <p>
                                                    <span><button className='text-success h-6 w-12'>Paid</button></span>
                                                </p>
                                                <p>Transaction Id: <span className='text-success'>{a.transactionId}</span></p>
                                            </div>}

                                        </td>
                                        <td>
                                            {
                                                (a.orderPrice && a.paid)
                                                    ?
                                                    <div></div>
                                                    :
                                                    <>

                                                        < label onClick={() => setDeleteOrder(a)} className='btn btn-square btn-outline' htmlFor="delete-confirm-modal">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </label>
                                                    </>
                                            }

                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {deleteOrder && <DeleteConfirmModal
                deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
                orders={orders}
                setOrders={setOrders}
            ></DeleteConfirmModal>}
        </div >
    );
};

export default MyOrders;