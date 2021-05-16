import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sign_up extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            pass: "",
            cPass: ""
        };
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleFNChange = this.handleFNChange.bind(this);
        this.handleLNChange = this.handleLNChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleC_PassChange = this.handleC_PassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }
    handlePassChange(event) {
        this.setState({ pass: event.target.value });
        console.log(this.state.pass);
    }
    handleFNChange(event) {
        this.setState({ firstName: event.target.value });
        console.log(this.state.firstName);
    }
    handleLNChange(event) {
        this.setState({ lastName: event.target.value });
        console.log(this.state.lastName);
    }
    handleUserChange(event) {
        this.setState({ userName: event.target.value });
        console.log(this.state.userName);
    }
    handleC_PassChange(event) {
        this.setState({ cPass: event.target.value });
        console.log(this.state.cPass);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            email:this.state.email,
            pass:this.state.pass,
            cPass:this.state.cPass
        }
        console.log(data)
    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-3"></div>
                    <div className="col-sm-12 col-md-6 ">
                        <div className="form-box">
                            <div className="text-center">
                                <h3>Create An Account</h3>{" "}
                                <small className="para">
                                    Sign up with your social media account or
                                    email address
                                </small>
                            </div>
                            <div className="demopadding">
                                <Link to="/facebook">
                                   <div className="icon social fb"><i className="fa fa-facebook"></i></div>
                                </Link>
                                <Link to="/twitter">
                                   <div className="icon social tw"><i className="fa fa-twitter"></i></div>
                                </Link>
                                <Link to="/google">
                                   <div className="icon social gl"><i className="fa fa-google-plus"></i></div>
                                </Link>
                           </div>
                            <h2>
                                <span className="line-center">Or</span>
                            </h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="name"
                                        name="uname"
                                        id="uname"
                                        className="form-control"
                                        placeholder="Username"
                                        required={true}
                                        value={this.state.userName}
                                        onChange={this.handleUserChange}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <input
                                            type="name"
                                            name="fname"
                                            id="fname"
                                            placeholder="First Name"
                                            className="form-control"
                                            required={true}
                                            value={this.state.firstName}
                                            onChange={this.handleFNChange}
                                        />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <input
                                            type="name"
                                            name="lname"
                                            id="lname"
                                            placeholder="Last Name"
                                            className="form-control"
                                            required={true}
                                            value={this.state.lastName}
                                            onChange={this.handleLNChange}
                                        />
                                    </div>
                                </div>
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
                                        value={this.state.pass}
                                        onChange={this.handlePassChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        required={true}
                                        value={this.state.cPass}
                                        onChange={this.handleC_PassChange}
                                    />
                                </div>

                                <div className="">
                                    <Link to={`/`} className="back">
                                        <span>&#8592;</span> Back
                                    </Link>
                                </div>

                                <div className="col-md-12">
                                    <a href="#" className="addtional_text">
                                        <p className="text-center">
                                            Forget email or password?
                                        </p>
                                    </a>
                                </div>
                                <div className="col text-center">
                                <button type="submit" className="sign_button">
                                    SIGN UP
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}