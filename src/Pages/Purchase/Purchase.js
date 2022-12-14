import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usePurchaseDetail from '../../hooks/usePurchaseDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import plus from '../../Images/plus.png';
import minus from '../../Images/minus.png';
import './Purchase.css';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {

    const { toolId } = useParams();
    const [purchase, isLoading] = usePurchaseDetail(toolId);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading></Loading>
    }
    
const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
        orderId: toolId,
        orderItem: purchase.name,
        orderQuantity: event.target.orderQuantity.value,
        orderPrice: event.target.orderPrice.value,
        email: user.email,
        address: event.target.address.value,
        phone: event.target.phone.value,
        img: purchase.img
    }
    axios.post('https://calm-lake-97858.herokuapp.com/order', order)
        .then(response => {
            // console.log(response);
            const { data } = response;
            if (data.insertedId) {
                toast('Your order is completed !!');
                event.target.reset();
                navigate('/dashboard/myOrders');
            }
        })
}

const { minimumOrderQuantity, price} = purchase;
const minimumOrderPrice = minimumOrderQuantity * price;

const errorAvailableMessage = document.getElementById('errorAvailableMessage');
const errorMinimumMessage = document.getElementById('errorMinimumMessage');

const orderPriceText = document.getElementById('orderPrice');
const unitPriceText = document.getElementById('unitPrice');

const orderQuantityText = document.getElementById('orderQuantity');
const minimumOrderText = document.getElementById('minimumOrder');
const availableQuantityText = document.getElementById('availableStockQuantity');
const submitButton = document.getElementById('submitButton');

const handleIncreaseOrder = () => {
    let orderPriceInt = parseInt(orderPriceText.value);
    let orderQuantityInt = parseInt(orderQuantityText.value);
    const unitPriceInt = parseInt(unitPriceText.innerText);
    const minimumOrderInt = parseInt(minimumOrderText.innerText);
    const availableQuantityInt = parseInt(availableQuantityText.innerText);

    if (orderQuantityInt < availableQuantityInt) {
        orderQuantityInt = orderQuantityInt + minimumOrderInt;
        orderPriceInt = orderQuantityInt * unitPriceInt;
        errorMinimumMessage.style.display = 'none';
    }

    if (orderQuantityInt > availableQuantityInt) {
        submitButton.style.display = 'none';
        errorAvailableMessage.style.display = 'block';
    }
    else {
        submitButton.style.display = 'block';
        errorAvailableMessage.style.display = 'none';
    }

    if (orderQuantityInt > availableQuantityInt || orderQuantityInt < minimumOrderInt) {
        submitButton.style.display = 'none';
    }

    orderQuantityText.value = orderQuantityInt;
    orderPriceText.value = orderPriceInt;
}
const handleDecreaseOrder = () => {
    let orderPriceInt = parseInt(orderPriceText.value);
    let orderQuantityInt = parseInt(orderQuantityText.value);
    const unitPriceInt = parseInt(unitPriceText.innerText);
    const minimumOrderInt = parseInt(minimumOrderText.innerText);
    const availableQuantityInt = parseInt(availableQuantityText.innerText);

    if (orderQuantityInt > minimumOrderInt) {
        orderQuantityInt = orderQuantityInt - minimumOrderInt;
        orderPriceInt = orderQuantityInt * unitPriceInt;
        errorAvailableMessage.style.display = 'none';
    }

    if (orderQuantityInt < minimumOrderInt) {
        submitButton.style.display = 'none';
        errorMinimumMessage.style.display = 'block';
    }
    else {
        submitButton.style.display = 'block';
        errorMinimumMessage.style.display = 'none';
    }

    if (orderQuantityInt > availableQuantityInt || orderQuantityInt < minimumOrderInt) {
        submitButton.style.display = 'none';
    }

    orderQuantityText.value = orderQuantityInt;
    orderPriceText.value = orderPriceInt;
}

return (
    <div>
        <h2 className='text-4xl text-primary text-bold'>Please Order: {purchase.name}</h2>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={purchase.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className="card-body">
                    <div className="form-control text-left">
                        <p>Minimum Order Quantity: <span id='minimumOrder'>{purchase.minimumOrderQuantity}</span></p>
                        <p>Available Quantity: <span id='availableStockQuantity'>{purchase.availableQuantity}</span></p>
                        <p>Unit Price: <span id='unitPrice'>{purchase.price}</span></p>

                    </div>
                </div>
                <form onSubmit={handlePlaceOrder}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="input-group">
                                    <span className='w-100 mb-2 input input-bordered'>Name</span>
                                    <input className='w-100 mb-2 input input-bordered' type="text" value={user?.displayName} name="name" readOnly disabled />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="input-group">
                                    <span className='w-100 mb-2 input input-bordered'>Email</span>
                                    <input className='w-100 mb-2 input input-bordered' type="email" value={user?.email} name="email" readOnly disabled />
                                </label>
                            </div>
                            <div className="form-control">
                                <input className='w-100 mb-2 input input-bordered' type="text" value={purchase.name} name="toolName" readOnly disabled />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea w-100 mb-2 input input-bordered" type="text" name="address" placeholder='Address' required autoComplete='off'></textarea>
                            </div>
                            <div className="form-control">
                                <input className='w-100 mb-2 input input-bordered' type="text" name="phone" maxLength={11} placeholder='Phone' required />
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className='input input-bordered'>Price</span>
                                    <input id='orderPrice' className='mb-2 input input-bordered' type="number" name="orderPrice" value={minimumOrderPrice} />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className='input input-bordered'>Quantity</span>
                                    <input id='orderQuantity' className='mb-2 input input-bordered' type="text" name="order" defaultValue={purchase.minimumOrderQuantity} />
                                </label>
                                <div className='flex justify-center'>
                                    <img src={plus} id="increase-button" onClick={handleIncreaseOrder} alt='' width={25} />
                                    <img src={minus} id="decrease-button" onClick={handleDecreaseOrder} alt='' width={25} />
                                </div>
                            </div>


                            <div className="form-control">
                                <div className="notify-section" >
                                    <p id="errorMinimumMessage" className="error-notify text-red-600 bg-gray-300" >You won't be able to reduce the quantity below the minimum order.</p>
                                    <p id="errorAvailableMessage" className="error-notify text-red-600 bg-gray-300">The order quantity can not be higher than the available quantity.</p>
                                </div>
                            </div>

                            <div className="form-control">
                                <input id='submitButton' className='btn btn-primary' type="submit" value="Place Order" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
);
};

export default Purchase;