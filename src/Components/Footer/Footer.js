import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-dark py-3">
            <div className="container">
                <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2 className="text-success">CycleMART</h2>
                    <div className="d-flex fs-3 text-success">
                    <AiFillFacebook /> <AiFillInstagram /> <AiFillLinkedin /> <AiFillYoutube />
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <h3 className="text-white mb-3">Cyclemart</h3>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Help Center</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >How to Order</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Returns & Refunds</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >FAQ</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Sell on cycleMart</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <a href="https://github.com" className="no-underline my-2 block text-white" >About Us</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Terms and Condition</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Privacy Policy</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Contact Us</a>
                    
                </div>
                </div>
            </div>
            <p className="text-center text-white mt-4">CycleMart 2021 ©. All Rights Reserved</p>
        </div>
    );
};

export default Footer;