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
                                            <p>Name:</p>
                                            <p className='mx-8 text-primary'> S.M. Mahbubur Rahman</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Email:</p>
                                            <p className='mx-8 text-primary'>bitu_rajshahi@yahoo.com <br /> mrahman942@gmail.com</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Educational Background:</p>
                                            <p className='mx-8 text-primary'>B.Sc.(Physics)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Skills in Web Developer:</p>
                                            <p className='mx-8 text-primary'>HTML 5, CSS 3, JavaScript, Bootstrap, <br />
                                                React-Bootstrap, React Router, <br />Firebase Authentication,
                                                <br />React Firebase Hooks, Tailwind CSS, <br />daisyUI — Tailwind CSS Components, MongoDB Atlas
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Three(3) Projects Link:</p>
                                            <p className='mx-8 text-primary'>
                                                <a href="https://bdmotors-aeadc.web.app" target="_blank" rel="noreferrer">
                                                    <span className='text-primary'>1. BDMOTORS</span>
                                                </a> <br />
                                                <a href="https://doctors-appointment-bc374.firebaseapp.com" target="_blank" rel="noreferrer">
                                                    <span className='text-primary'>2. Doctor's Appointment</span>
                                                </a> <br />
                                                <a href="https://sweet-t-shirt-mania.netlify.app" target="_blank" rel="noreferrer">
                                                    <span className='text-primary'>3. T-Shirt Mania</span>
                                                </a>
                                            </p>

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