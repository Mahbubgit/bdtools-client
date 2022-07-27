import React, { useState } from 'react';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { Link } from 'react-router-dom';
import copyright from './../../../Images/copyright.png';

const Footer = () => {
    
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/tools">Tools</Link>
                    <Link to="/">Home</Link>
                    <Link to="/business-summary">Business Summary</Link>
                    <Link to="/reviews">Reviews</Link>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/jobs">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/terms">Terms of use</Link>
                    <Link to="/privacy">Privacy policy</Link>
                    <Link to="/cookie">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <CompanyTitle></CompanyTitle>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                <p>
                    <span>Copyright <img className='inline' style={{ width: "15px", height: "15px" }} src={copyright} alt="copyright" /> {year} BDTOOLS, All Rights Reserved  </span>
                </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;