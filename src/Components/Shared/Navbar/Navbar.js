import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/Chef.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg menu-style fixed-top">
                <div className="container">
                    <a className="navbar-brand logo-style fs-3" href="#home"><img className='logo-img' src={logo} alt="" /><span>
                        Chefs<span className="text-danger span">Cuisine</span></span> </a>
                    <span className="navbar-toggler text-secondary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon hambrgr-btn text-secondary">
                            <span></span> <span></span>
                            <span></span>
                        </span>
                    </span>
                    <div className="collapse navbar-collapse main-menu" id="main_nav">
                        <ul className="navbar-nav ul-menu">
                            <li className="nav-item list-menu-style active">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>

                            <li className="nav-item list-menu-style">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item list-menu-style">
                                <NavLink className="nav-link" to="/foods">Foods</NavLink>
                            </li>

                            <li className="nav-item list-menu-style">
                                <NavLink className="nav-link" to="/signIn">Signin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;