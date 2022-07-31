import React from 'react';
import photo from '../../Images/Picture.jpg';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" alt='' width={200} />
                    <div>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <table className='text-xl text-neutral font-bold text-left'>
                                    <tr>
                                        <td>
                                            Name: <br /> <span className='text-primary '>S.M. Mahbubur Rahman</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Email: <br /><span className='text-primary'>bitu_rajshahi@yahoo.com, mrahman942@gmail.com</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Educational Background: <br /><span className='text-primary'>B.Sc. in Physics</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Skills in Web Developer: <br />
                                            <span className='text-primary justify-center'>HTML 5, CSS 3, JavaScript, Bootstrap, React-Bootstrap, React Router, Firebase Authentication, React Firebase Hooks, Tailwind CSS, daisyUI — Tailwind CSS Components, MongoDB Atlas
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Three(3) Projects Link: <br />
                                            <a href="https://bdmotors-aeadc.web.app" target="_blank" rel="noreferrer">
                                                <span className='text-primary'>1. BDMOTORS</span>
                                            </a> <br />
                                            <a href="https://doctors-appointment-bc374.firebaseapp.com" target="_blank" rel="noreferrer">
                                                <span className='text-primary'>2. Doctor's Appointment</span>
                                            </a> <br />
                                            <a href="https://sweet-t-shirt-mania.netlify.app" target="_blank" rel="noreferrer">
                                                <span className='text-primary'>3. T-Shirt Mania</span>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default MyPortfolio;