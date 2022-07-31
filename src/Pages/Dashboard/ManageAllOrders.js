import React, { useEffect, useState } from 'react';
import DeleteOrdersModal from '../Shared/DeleteConfirm/DeleteOrdersModal';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteOrders, setDeleteOrders] = useState(null);

    useEffect(() => {
        // fetch('https://calm-lake-97858.herokuapp.com/orders', {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOrders(data)
            });
    }, []);

    const shippedOrder = (id) => {
        fetch(`http://localhost:5000/orders/shippedOrder/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to ship the order');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully shipped the order`);
                }
            })
        }

        return (
            <div>
                <div className="overflow-x-auto my-5">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th className='text-center'>Order By</th>
                                <th className='text-center'>Order Item</th>
                                <th className='text-center'>Order Quantity</th>
                                <th className='text-center'>Address</th>
                                <th className='text-center'>Phone</th>
                                <th className='text-center'>Paid</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>
                                    <tr key={order._id}>
                                        <td>{index + 1}</td>
                                        <td className='text-center'>{order.email}</td>
                                        <td className='text-center'>{order.orderItem}</td>
                                        <td className='text-center'>{order.orderQuantity}</td>
                                        <td className='text-center'>{order.address}</td>
                                        <td className='text-right'>{order.phone}</td>
                                        <td>
                                            {
                                                order.paid && <label className='text-primary'>Paid</label>
                                            }
                                            {
                                                !order.paid && <label className='text-secondary'>Unpaid</label>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order.paid && !order.status && <label className='text-primary'>Pending</label>
                                            }
                                        </td>
                                        <td>
                                            {
                                                !order.paid &&
                                                < label onClick={() => setDeleteOrders(order)} className='btn btn-square btn-outline' htmlFor="delete-confirm-modal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="btn w-xs rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                </label>
                                            }
                                            {
                                                order.paid && !order.status &&
                                                <button onClick={() => shippedOrder(order._id)} className="btn w-xs rounded-full bg-primary">Shipped</button>
                                            }
                                            {
                                                order.paid && order.status &&
                                                <label className='text-primary'>Shipped</label>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {deleteOrders && <DeleteOrdersModal
                        deleteOrders={deleteOrders}
                        setDeleteOrders={setDeleteOrders}
                        orders={orders}
                        setOrders={setOrders}
                    ></DeleteOrdersModal>}
                </div>
            </div>
        );
    };

    export default ManageAllOrders;