import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import googleImg from '../../../Images/social/google.png';

// import useToken from '../../hooks/useToken';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    // const [token] = useToken(user || gUser);

    let signUpError = '';
    let confirmPasswordError = '';

    if (error || gError || updateError) {
        signUpError = <p className='text-center text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    // if (token) {
    //     // console.log(user || gUser);
    //     navigate('/');
    // }
    if (user || gUser) {
        navigate('/');
        // navigate(from, { replace: true });
    }
    const onSubmit = async data => {
        if (data.password === data.confirmPassword) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            console.log('Update Done', data);
        }
        else {
            signUpError = <p className='text-center text-red-500'>Confirm password must be same as password</p>
            confirmPasswordError = signUpError.props.children;
            // console.log(confirmPasswordError);
        }
    };

    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body py-1">
                        <h2 className="text-center text-neutral font-bold">Register To <span className='text-primary font-bold text-2xl'>B</span><span className='text-secondary font-bold text-2xl'>D</span><span className='text-accent font-bold text-sm'>TOOLS</span> Account</h2>

                        <button
                            className="btn btn-md"
                            onClick={() => signInWithGoogle()}
                        >
                            <img className='mr-12' style={{ width: "30px", height: "30px" }} src={googleImg} alt="" />
                            Continue with Google
                        </button>
                        <div className="divider">OR</div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label py-1">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    }
                                    )}
                                />
                                <label className="label py-1">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label py-1">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Invalid Email'
                                        }
                                    }
                                    )}
                                />
                                <label className="label py-1">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label py-1">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    }
                                    )}
                                />
                                <label className="label py-1">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label py-1">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: 'Confirm password is required and to be same as password'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    }
                                    )}
                                />
                                <label className="label py-1">
                                    {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-600">{errors.confirmPassword.message}</span>}
                                    {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.confirmPassword.message}</span>}
                                </label>
                            </div>
                            {signUpError}
                            {confirmPasswordError}
                            <input className='btn w-full max-w-xs' type="submit" value="Register" />
                        </form>
                        <p>Already have an account? <Link to="/login" className='text-primary'>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;