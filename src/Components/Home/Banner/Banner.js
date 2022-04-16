import React from 'react';
import heroImg from '../../../images/hero-header.png';
import pizza from '../../../images/pizza.png';
import burger from '../../../images/burger.png';
import chawmin from '../../../images/chawmin.jpg';
import sandwich from '../../../images/Sandwich.png';
import chicken from '../../../images/chicken lolipop.jpg';
import steak from '../../../images/steak.png';
import './Banner.css';

const Banner = () => {
    return (
        <div id="category">
            <div className="bg-warning overflow-hidden" >
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center  py-lg-4">
                        <div className="col-12 col-lg-6 order-lg-0 order-1">
                            <div className="text-center text-lg-start ani-text">
                                <h1 className="display-1 fw-bold text-light">
                                    HUNGRY? YOU ARE IN THE RIGHT PLACE
                                </h1>
                                <p className="fs-2 fw-bolder text-muted">
                                    FASTEST DELIVERY & EASY PICKUP WITH ONE CLICK!!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-3" style={{ cursor: 'pointer' }}>
                            <img className="img-fluid m-lg-0 ms-lg-5 image-hover ani-img" src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-3">
                <div className="d-flex align-items-center justify-content-between my-4">
                    <h1 className="fw-bold">
                        Search by Food
                    </h1>
                    <h5 className="text-muted">
                        VIEW ALL <i className="fas fa-chevron-right"></i>
                    </h5>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 text-center">

                    <div className="col effect-1">
                        <img className="img-fluid  rounded-circle" src={burger} alt="" />
                        <h5 className="fw-bold mt-3">
                            Burger
                        </h5>
                    </div>
                    <div className="col effect-1">
                        <img className="img-fluid " src={pizza} alt="" />
                        <h5 className="fw-bold mt-3">
                            Pizza
                        </h5>
                    </div>
                    <div className="col  effect-1">
                        <img className="img-fluid  rounded-circle" src={chawmin} alt="" />
                        <h5 className="fw-bold mt-3">
                            Chawmin
                        </h5>
                    </div>
                    <div className="col effect-1">
                        <img className="img-fluid  rounded-circle" src={steak} alt="" />
                        <h5 className="fw-bold mt-3">
                            Steak
                        </h5>
                    </div>
                    <div className="col effect-1">
                        <img className="img-fluid  rounded-circle" src={sandwich} alt="" />
                        <h5 className="fw-bold mt-3">
                            Sandwiches
                        </h5>
                    </div>
                    <div className="col effect-1">
                        <img className="img-fluid  rounded-circle" src={chicken} alt="" />
                        <h5 className="fw-bold mt-3">
                            Chicken BBQ
                        </h5>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;