import React from 'react';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-dark py-3">
            <div className="container">
                <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h2 className="text-success">TravlisTBD</h2>
                    <div className="d-flex fs-3 text-success">
                    <AiFillFacebook /> <AiFillInstagram /> <AiFillLinkedin /> <AiFillYoutube />
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <h3 className="text-white mb-3">For Tourists</h3>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Book An Spot</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Watch Video</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Favourites</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >FAQ</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Find A Spot</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <a href="https://github.com" className="no-underline my-2 block text-white" >About Us</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Terms and Condition</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Privacy Policy</a>
                    <a href="https://github.com" className="no-underline my-2 block text-white" >Contact Us</a>
                    
                </div>
                </div>
            </div>
            <p className="text-center text-white mt-4">TravelistBD 2021 ©. All Rights Reserved</p>
        </div>
    );
};

export default Footer;