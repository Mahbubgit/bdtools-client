import React from 'react';
import photo from '../../Images/Picture.jpg';

const MyPortfolio = () => {
    return (


        <div>
            <h1 className="text-5xl font-bold">My Portfolio</h1>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <p className='text-5xl text-neutral font-bold'>Name: S.M. Mahbubur Rahman</p>
                                <p className='text-5xl text-neutral font-bold'>Email: bitu_rajshahi@yahoo.com/mrahman942@gmail.com</p>
                                <p className='text-5xl text-neutral font-bold'>Educational Background: B.Sc. in Physics</p>
                                <p className='text-5xl text-neutral font-bold'>Skills in Web Developer: HTML 5, CSS 3, JavaScript, Bootstrap, React-Bootstrap, React Router, Firebase Authentication, React Firebase Hooks, Tailwind CSS, daisyUI — Tailwind CSS Components, MongoDB Atlas</p>
                                <p className='text-5xl text-neutral font-bold'>Three(3) Projects Link:
                                    <ul>
                                        <li>
                                            https://bdmotors-aeadc.web.app
                                        </li>
                                        <li>
                                            doctors-appointment-bc374.firebaseapp.com
                                        </li>
                                        <li>
                                            https://sweet-t-shirt-mania.netlify.app
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default MyPortfolio;