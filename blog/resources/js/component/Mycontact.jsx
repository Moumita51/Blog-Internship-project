import React, { Component } from "react";

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            company:"",
            email: "",
            phone: "",
            message: ""
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleMailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }
    handleCompanyChange(event) {
        this.setState({ company: event.target.value });
        console.log(this.state.company);
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
        console.log(this.state.phone);
    }
    
    handleUserChange(event) {
        this.setState({ userName: event.target.value });
        console.log(this.state.userName);
    }
    handleMsgChange(event) {
        this.setState({ message: event.target.value });
        console.log(this.state.message);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data={
            userName:this.state.userName,
            email:this.state.email,
            phone:this.state.phone,
            company:this.state.company,
            message:this.state.message
        }
        console.log(data)
    }
    render() {
    return (
        <div className="container" style={{marginTop:'140px'}}>

<h1 className="brand"><span>AMAR ISCHOOL</span></h1>

<div className="wrapper">

 
  <div className="company-info">
    <h3>AMAR ISCHOOL</h3>

    <ul>
      <li><i className="fa fa-road"></i> 44 Main Street</li>
      <li><i className="fa fa-phone"></i> (555) 555-5555</li>
      <li><i className="fa fa-envelope"></i> test@phoenix.com</li>
    </ul>
  </div>
  

 
  <div className="contact">
    <h3>E-mail Us</h3>

    <form onSubmit={this.handleSubmit}>

      <p>
        <label>Name</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Username"
        value={this.state.userName}
        onChange={this.handleUserChange}
        required/>
      </p>

      <p>
        <label>Company</label>
        <input 
        type="text" 
        name="company" 
        id="company"
        placeholder="Your Organization"
        value={this.state.company}
        onChange={this.handleCompanyChange}
        />
      </p>

      <p>
        <label>E-mail Address</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="Email"
        value={this.state.email}
        onChange={this.handleMailChange}
        required/>
      </p>

      <p>
        <label>Phone Number</label>
        <input 
        type="text" 
        name="phone" 
        id="phone"
        placeholder="Phone Number"
        value={this.state.phone}
        onChange={this.handlePhoneChange}
        />
      </p>

      <p className="full">
        <label>Message</label>
        <textarea 
        name="message" 
        rows="5" 
        id="message"
        placeholder="Please write your message here..."
        value={this.state.message}
        onChange={this.handleMsgChange}
        >
        </textarea>
      </p>

      <p className="full">
        <button type="submit">Submit</button>
      </p>

    </form>
    
  </div>
 

</div>

</div>
    );
}
}