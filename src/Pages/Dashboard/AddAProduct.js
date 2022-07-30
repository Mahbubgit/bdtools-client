import React from 'react';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
// import Loading from '../Shared/Loading/Loading';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: toolsType, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/toolsType').then(res => res.json()));
    const imageStorageKey = '8be01473d7fc1567a492620a31b4d0fc';

    const onSubmit = async data => {
        // console.log('data', data);
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
                        // name, img, description, minimumOrderQuantity, availableQuantity, price 
                        name: data.name,
                        description: data.description,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('product', inserted);
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })
                }
                // console.log('imgbb', result);
            })
    };

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2 className='text-4xl text-primary font-bold'> Add a New Product/Tool</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs mt-4">
                    {/* <label className="label">
                        <span className="label-text">Name</span>
                    </label> */}
                    <input
                        type="text"
                        placeholder="Tool Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
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

                {/* <div className="form-control mx-auto w-full max-w-xs">
                    <select
                        {...register('toolsType')}
                        className="select input-bordered w-full max-w-xs"
                        placeholder="Tool Type"
                    >

                        {
                            toolsType.map(type => <option
                                key={type._id}
                                value={type.name}
                            >{type.name}</option>)
                        }
                    </select>
                </div> */}

                <div className="form-control mx-auto w-full max-w-xs">
                    <input
                        type="file"
                        placeholder="Tool Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
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

                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAProduct;