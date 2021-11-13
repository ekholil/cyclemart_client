import { CCol, CContainer, CRow } from '@coreui/react';
import React from 'react';
import about1 from './img/about1.jpg'
import about2 from './img/about.jpg'
const Aboutus = () => {
    return (
        <div>
            <h1 className="text-center text-success my-3">ABOUT CYCLEMART</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h3 className="text-center text-success mb-4">Award Winning Shop</h3>
                        <p className="px-5">
                        We Are the one of the importer of popular bicycles.
                        we want to make sure everyone feels safe, confident and happy while shopping with us, so our safety measures remain in place in store. We have been busy redesigning the store to make your shopping experience even more pleasurable. We’ve enhanced cleaning practices, including sanitising baskets after every use and regularly cleaning the touchpoints around our shops. We’ll also be providing hand sanitiser at entrances and around the store for you to use. Help us keep everyone safe by keeping a 2-metre distance from customers and staff when you're in the shop. We’ve added new signage to help guide you
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={about1} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={about2} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h3 className="text-center text-success mb-4">Top Class Brands</h3>
                        <p className="px-5">
                        We Are the one of the importer of popular bicycles.
                        we want to make sure everyone feels safe, confident and happy while shopping with us, so our safety measures remain in place in store. We have been busy redesigning the store to make your shopping experience even more pleasurable. We’ve enhanced cleaning practices, including sanitising baskets after every use and regularly cleaning the touchpoints around our shops. We’ll also be providing hand sanitiser at entrances and around the store for you to use. Help us keep everyone safe by keeping a 2-metre distance from customers and staff when you're in the shop. We’ve added new signage to help guide you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
