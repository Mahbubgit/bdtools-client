import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [myProfileData, setMyProfileData] = useState([]);
    const navigate = useNavigate();

    const [user, isLoading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        if (user) {
            fetch(`https://calm-lake-97858.herokuapp.com/user?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate("/");
                    }
                    return res.json()
                })
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].email === user.email) {
                            setMyProfileData(data[i])
                        }
                    }
                });
        }
    }, [user]);

    const onSubmit = async data => {

        const userProfile = {
            name: data.name,
            email: data.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedInLink: data.linkedInLink,
        }

        fetch(`https://calm-lake-97858.herokuapp.com/user/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to update your profile');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.result.modifiedCount > 0) {
                    toast.success(`Your profile updated successfully`);
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        value={user.name ? user.name : user.displayName}
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
                        defaultValue={myProfileData.education}
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'Update Education'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-600">{errors.education.message}</span>}
                    </label>
                    {/* /> */}
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location(city/district)"
                        defaultValue={myProfileData.location}
                        className="input input-bordered w-full max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Update Location'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-600">{errors.location.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Phone"
                        maxLength={11}
                        defaultValue={myProfileData.phone}
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: 'Update phone'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">LinkedIn Profile Link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="LinkedIn profile link"
                        defaultValue={myProfileData.linkedInLink}
                        className="input input-bordered w-full max-w-xs"
                        {...register("linkedInLink", {
                            required: {
                                value: true,
                                message: 'Update Link'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.linkedInLink?.type === 'required' && <span className="label-text-alt text-red-600">{errors.linkedInLink.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs my-4' type="submit" value="Save" />
            </form>
        </div>
    );
};

export default MyProfile;