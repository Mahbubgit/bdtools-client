import React from 'react';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import profileImg from '../../../Images/profile-image.jpg';
const Header = () => {

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

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/business-summary">Business Summary</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>

        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>
            {
                user
                    ?
                    <>
                        <Link className='text-red-600 font-bold' onClick={logout} to="/login">Sign Out</Link>
                    </>
                    :
                    <Link className='text-green-600 font-bold' to="/login">Login</Link>
            }
        </li>
    </>

    const menuHiddenItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/business-summary">Business Summary</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>
            {
                user
                    ?
                    <Link className='text-red-600 font-bold' onClick={logout} to="/login">Sign Out</Link>
                    :
                    <Link className='text-green-600 font-bold' to="/login">Login</Link>
            }
        </li>
    </>

    const profileMenuItems = <>
        {
            user && <p className='ms-auto'>{user.displayName}{user.name}</p>
        }
        <li>
            <Link className="justify-between" to="/dashboard">Profile <span className="badge">New</span></Link>
        </li>
        <li><Link to="/dashboard/settings">Settings</Link></li>
        <li><Link className='text-red-600 font-bold' onClick={logout} to="/login">Sign Out</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuHiddenItems}
                    </ul>
                </div>
                <Link to="/home" className="btn btn-ghost normal-case text-xl"><CompanyTitle></CompanyTitle></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

            {
                user &&
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profileImg} alt='' />
                        </div>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {profileMenuItems}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Header;