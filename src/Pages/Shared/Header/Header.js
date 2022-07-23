import React from 'react';
import { useState } from "react";
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {

    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }

    const [user, loading] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user);
    }
    return (

        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-2 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <CompanyTitle></CompanyTitle>
                    </div>

                    {/* For medium and plus sized devices */}

                    <ul className="hidden md:flex flex-auto space-x-2">
                        <li onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}><Link to="/">Home</Link></li>
                        <li onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}><Link to="/tools">Tools</Link></li>
                        <li onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}><Link to="/business-summary">Business Summary</Link></li>
                        <li onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}><Link to="/reviews">Reviews</Link></li>
                        {
                            user && <li onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                            {
                                user
                                    ?
                                    <>
                                        <Link className='text-red-600 font-bold' onClick={logout} to="/login">Sign Out</Link>
                                        
                                    </>
                                    :
                                    <Link to="/login">Login</Link>
                            }
                        </li>
                        {
                            user && <p className='ms-auto'>{user.displayName}{user.name}</p>
                        }

                    </ul>
                </nav>

                {/* for smaller devices */}

                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length !== 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Home"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <li onClick={() => setSelectedText("Home")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link to="/">Home</Link></li>
                            <li onClick={() => setSelectedText("Tools")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link to="/tools">Tools</Link></li>
                            <li onClick={() => setSelectedText("Business Summary")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link to="/business-summary">Business Summary</Link></li>
                            <li onClick={() => setSelectedText("Reviews")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link to="/reviews">Reviews</Link></li>
                            {
                                user && <li onClick={() => setSelectedText("Dashboard")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link to="/dashboard">Dashboard</Link></li>
                            }
                            <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">
                                {
                                    user
                                        ?
                                        <Link className='text-red-600 font-bold' onClick={() => setSelectedText("Logout")} to="/login">Sign Out</Link>
                                        :
                                        <Link className='text-green-600 font-bold' onClick={() => setSelectedText("Login")} to="/login">Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;