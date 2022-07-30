import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../../Images/social/google.png';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (error || gError) {
        signInError = <p className='text-center text-red-500'>{error?.message || gError?.message}</p>
    }

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    const resetPassword = async (event) => {
        const userEmail = register.email;
        // console.log(userEmail);
        if (userEmail) {
            await sendPasswordResetEmail(userEmail);
            toast('Sent email for reset password');
        }
        // else {
        //     toast('Please enter your email address');
        // }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body py-0">
                    <h2 className="text-center text-neutral font-bold">Login To <span className='text-primary font-bold text-2xl'>B</span><span className='text-secondary font-bold text-2xl'>D</span><span className='text-accent font-bold text-sm'>TOOLS</span> Account</h2>
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
                            <label className="label">
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
                                        message: 'error message'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <button className='btn btn-link text-primary justify-start capitalize font-bold' onClick={resetPassword}>Forgot Password?</button>
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p>New to <span className='text-primary font-bold text-2xl'>B</span><span className='text-secondary font-bold text-2xl'>D</span><span className='text-accent font-bold text-sm'>TOOLS</span>? <Link to="/register" className='text-primary'>Create New Account</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;