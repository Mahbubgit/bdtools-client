import React from 'react';

const Products = ({ tool, index, setDeleteProduct }) => {
    const { _id, name, description, minimumOrderQuantity, availableQuantity, price, img } = tool;

    return (

        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{minimumOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <img src={img} alt="" />
            </td>
            <td>
                < label onClick={() => setDeleteProduct(_id)} className='btn btn-square btn-outline' htmlFor="delete-confirm-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label>
            </td>
        </tr>


    );
};

export default Products;