import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrdersModal = ({ deleteOrders, setDeleteOrders, setOrders, orders }) => {
    const { _id, orderItem, email } = deleteOrders;

    const handleDelete = () => {
        fetch(`https://calm-lake-97858.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order of ${orderItem} created by ${email} is deleted.`);
                    setDeleteOrders(null);
                    
                    const remainingOrder = orders.filter(order => order._id !== _id);
                    setOrders(remainingOrder);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure to delete order of {orderItem} create by {email}?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-secondary text-white'>Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrdersModal;