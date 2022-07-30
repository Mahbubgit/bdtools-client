import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {

    const [user, isLoading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        // console.log('data', data);

        const userProfile = {
            name: data.name,
            email: data.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedInLink: data.linkedInLink,
        }
        const url = `http://localhost:5000/user/profile/${user.email}`;
        // send to your database
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(inserted => {
                // console.log('userProfile', inserted);
                if (inserted.insertedId) {
                    toast.success('Your profile updated successfully');
                    reset();
                }
                else {
                    toast.error('Failed to update your profile');
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <h2 className='text-4xl text-primary font-bold'>My Profile</h2> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        value={user.displayName}
                        {...register("name")}
                    />
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        value={user.email}
                        {...register("email")}
                    />
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Education is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-600">{errors.education.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location(city/district)"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location")}
                    />
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone")}
                    />
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile Link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="LinkedIn profile link"
                        className="input input-bordered w-full max-w-xs"
                        {...register("linkedInLink")}
                    />
                </div>

                <input className='btn w-full max-w-xs my-4' type="submit" value="Save" />
            </form>
        </div>
    );
};

export default MyProfile;