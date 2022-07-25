import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css';

const Tool = ({ serviceKey: key, tool }) => {
    const { _id, name, img, description, minimumOrderQuantity, availableQuantity, price } = tool;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/tool/${id}`);
    }
    
    let toolName, toolImg, toolDescription, toolMinimumOrderQuantity, toolAvailableQuantity, toolPrice;
    if (key === 'hammer') {
        if (name === 'Hammer') {

            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;
            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'chisel') {
        if (name === 'Chisel') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'drill-machine') {
        if (name === 'Drill-machine') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'electric-saw') {
        if (name === 'Electric-saw') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'measuring-tape') {
        if (name === 'Measuring-tape') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'pliers') {
        if (name === 'Pliers') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'screwdriver') {
        if (name === 'Screwdriver') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }
    if (key === 'wrench') {
        if (name === 'Wrench') {
            toolName = name;
            toolImg = img;
            toolDescription = description;
            toolMinimumOrderQuantity = minimumOrderQuantity;
            toolAvailableQuantity = availableQuantity;
            toolPrice = price;

            return (
                <div className="card lg:max-w-lg bg-base-100 shadow-xl my-2">
                    <img className='image' src={toolImg} alt=""/>
                    <h4>{toolName}</h4>
                    <p>
                        <small>{toolDescription}</small> <br />
                        Minimum Order Quantity: {toolMinimumOrderQuantity} <br />
                        Available Quantity: {toolAvailableQuantity} <br />
                        Cost: ${toolPrice} <br />

                    </p>
                    <div className='my-2'>
                        <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary w-50 my-0 mx-0'> Purchase</button>
                    </div>
                </div>
            );
        }
    }

};

export default Tool;