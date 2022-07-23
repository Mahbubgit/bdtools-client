import React, { useState } from 'react';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { Link } from 'react-router-dom';
import copyright from './../../../Images/copyright.png';

const Footer = () => {
    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const today = new Date();
    const year = today.getFullYear();

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }


    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link onClick={() => selected(0)} to="/">Home</Link>
                    <Link onClick={() => selected(1)} to="/tools">Tools</Link>
                    <Link onClick={() => selected(2)} to="/business-summary">Business Summary</Link>
                    <Link onClick={() => selected(3)} to="/reviews">Reviews</Link>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link onClick={() => selected(4)} to="/contact">Contact</Link>
                    <Link onClick={() => selected(5)} to="/about">About</Link>
                    <Link onClick={() => selected(6)} to="/jobs">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link onClick={() => selected(7)} to="/terms">Terms of use</Link>
                    <Link onClick={() => selected(8)} to="/privacy">Privacy policy</Link>
                    <Link onClick={() => selected(9)} to="/cookie">Cookie policy</Link>
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