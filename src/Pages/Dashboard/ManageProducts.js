import React, { useEffect, useState } from 'react';
// import Products from './Products';
import DeleteProductsModal from '../Shared/DeleteConfirm/DeleteProductsModal';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(null);

    useEffect(() => {
        // fetch('https://calm-lake-97858.herokuapp.com/tools', {
        fetch('https://calm-lake-97858.herokuapp.com/tools', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTools(data)
            });
    }, []);

    return (
        <div>
            <div className="overflow-x-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Description</th>
                            <th className='text-center'>Minimum Order Qty</th>
                            <th className='text-center'>Available Qty</th>
                            <th className='text-center'>Unit Price</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) =>
                                <tr key={tool._id}>
                                    <td>{index + 1}</td>
                                    <td>{tool.name}</td>
                                    <td>{tool.description}</td>
                                    <td className='text-center'>{tool.minimumOrderQuantity}</td>
                                    <td className='text-center'>{tool.availableQuantity}</td>
                                    <td className='text-right'>{tool.price}</td>
                                    <td>
                                        <img src={tool.img} alt="" />
                                    </td>
                                    <td>
                                        < label onClick={() => setDeleteProduct(tool)} className='btn btn-square btn-outline' htmlFor="delete-confirm-modal">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </label>
                                    </td>
                                </tr>
                            )

                            // tools.map((tool, index) => <Products
                            //     key={tool._id}
                            //     index={index}
                            //     tool={tool}
                            //     deleteProduct={deleteProduct}
                            //     setDeleteProduct={setDeleteProduct}
                            //     setTools={setTools}
                            // ></Products>)

                        }

                    </tbody>
                </table>
                {deleteProduct && <DeleteProductsModal
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                    tools={tools}
                    setTools={setTools}
                ></DeleteProductsModal>}
            </div>
            {/* {deleteProduct && <DeleteProductsModal
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                tools={tools}
                setTools={setTools}
            ></DeleteProductsModal>} */}
        </div>
    );
};

export default ManageProducts;