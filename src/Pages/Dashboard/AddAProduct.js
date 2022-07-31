import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [toolsType, setToolsType] = useState([]);

    useEffect(() => {
        fetch('https://calm-lake-97858.herokuapp.com/toolsType', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setToolsType(data)
            });
    }, []);


    const imageStorageKey = '8be01473d7fc1567a492620a31b4d0fc';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        name: data.name,
                        description: data.description,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        img: img
                    }
                    // send to your database
                    fetch('https://calm-lake-97858.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })
                }
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs my-5">
                    <select
                        {...register('name')}
                        className="select input-bordered w-full max-w-xs"
                        placeholder="Tool Name"
                    >
                        {
                            toolsType.map(toolType => <option
                                key={toolType._id}
                                value={toolType.name}
                            >{toolType.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Tool Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumOrderQuantity", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.minimumOrderQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.availableQuantity.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Unit Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Unit Price is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs mt-5">
                    <input
                        type="file"
                        placeholder="Tool Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-600">{errors.img.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs mb-4' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;