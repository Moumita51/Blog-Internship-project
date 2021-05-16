import React from "react";
import { Switch, Route, Link } from "react-router-dom";
//import Contact from "./contact";

const Footer = () => {
    return (
        <>
            <footer className='container'>
                <div className="left-footer">
                    <Link to='/contact'>Contact</Link>
                    <Link to='/policy'>Policy</Link>
                </div>
                <div className="footer-brand">
                    <span>Amari</span>
                    <span>Blog</span>
                </div>
                <div className="right-footer">
                    <Link to="/facebook">
                        <i className="fa fa-facebook icons" aria-hidden="true"></i>
                    </Link>
                    <Link to="/linkedin">
                        <i className="fa fa-linkedin icons" aria-hidden="true"></i>
                    </Link>
                    <Link to="/twitter">
                        <i className="fa fa-twitter icons" aria-hidden="true"></i>
                    </Link>
                </div>
            </footer>
        </>
    );
};
export default Footer;
