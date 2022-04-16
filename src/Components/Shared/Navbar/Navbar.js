import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import logoImg from '../../../images/Chef.png';
import './Navbar.css'

const Navbar = () => {
    $(function () {
        // Nav Toggle Icon Jquey Code
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });
    return (
        <div>
            < nav className="nav-area mb-5" id="navbar_top">
                <div className="navbar navbar-expand-lg menu-style fixed-top">
                    <div className="container">
                        <a className="navbar-brand logo-style fs-3" href="#home"><img className='logo-img' src={logoImg} alt="" /><span>
                            Chefs<span className="text-danger span">Cuisine</span></span> </a>

                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="list-menu-style active ms-3">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>

                                <li className="list-menu-style ms-3">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>

                                <li className="list-menu-style ms-3">
                                    <NavLink className="nav-link" to="/foods">Foods</NavLink>
                                </li>

                                <li className="list-menu-style ms-3">
                                    <NavLink className="nav-link" to="/signIn">Signin</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;