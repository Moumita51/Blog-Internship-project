import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Sign_in extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePassChange(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(data);
    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6 ">
                        <div className="form-box">
                            <div className="text-center">
                                <h3>Sign In</h3>{" "}
                                <small className="para">
                                    Sign up with your social media account or
                                    email address
                                </small>
                            </div>
                            <div className="demopadding">
                                <Link to="/facebook">
                                        <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to="/twitter">
                                        <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to="/google">
                                        <i className="fa fa-google-plus"></i>
                                </Link>
                            </div>

                            <h2>
                                <span className="line-center">Or</span>
                            </h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required={true}
                                        value={this.state.email}
                                        onChange={this.handleMailChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required={true}
                                        value={this.state.password}
                                        onChange={this.handlePassChange}
                                    />
                                </div>

                                <div className="col-md-12">
                                   
                                    <Link to="#" className="addtional_text">
                                        <p className="text-center">
                                            Forget email or password?
                                        </p>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/" className="back">
                                        <span>&#8592;</span> Back
                                    </Link>
                                </div>

                                <div className="col text-center">
                                    <button
                                        type="submit"
                                        className="sign_button"
                                    >
                                        SIGN IN
                                    </button>
                                </div>
                            </form>
                            <div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center">
                                            <Link
                                                to="/register"
                                                className="back_button"
                                            >
                                                Create an account &#8594;
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
