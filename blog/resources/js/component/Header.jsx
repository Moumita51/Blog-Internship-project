import React from "react";

import Logo from "../images/logo1.png";
import brandLogo from "../images/logo2.png";
import { Link, useRouteMatch } from "react-router-dom";

const Navbar = () => {
    const match = useRouteMatch(["/signin", "/register"]);
    return match ? (
        <div className='singlebrand'>
            <img src={brandLogo} alt="logo" className=""/>
        </div>
    ) : (
        <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        style={{ width: "40px", borderRadius: "50%" }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/latest">
                                Latest Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top">
                                Top Blogs
                            </Link>
                        </li>
                    </ul>
                    <img className='brand' src={brandLogo} alt="logo"/>
                    {/* Right-nav */}
                    <div className="right-nav">
                        <div className="right-item">
                            <Link to="/signin" className="btn btn-light signin">
                                Sign In
                            </Link>
                            <Link to="/register" className="btn btn-dark register">
                                Register
                            </Link>
                        </div>

                        <form className="search-form">
                            <input
                                type="search"
                                name="search"
                                className="search-input"
                                placeholder="Search here"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
