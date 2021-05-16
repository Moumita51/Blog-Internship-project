import React, { Component } from "react";

export default class Edit_profile extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            mobile: "",
            dateOfBirth: "",
            gender: "",
            bio: "",
            instituteName: "",
            profession: "",
			bloodGroup: "",
			facebook: "",
			twitter: "",
			instagram: "",
			image: ""
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleInstituteNameChange = this.handleInstituteNameChange.bind(this);
        this.handleProfessionChange = this.handleProfessionChange.bind(this);
		this.handleBloodGroupChange = this.handleBloodGroupChange.bind(this);
		this.handleFacebookChange = this.handleFacebookChange.bind(this);
        this.handleTwitterChange = this.handleTwitterChange.bind(this);
		this.handleInstagramChange = this.handleInstagramChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleChange(event) {
        loadImage(event);
        this.setState({ image: event.target.value });
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
        console.log(this.state.firstName);
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
        console.log(this.state.lastName);
    }

    handleMobileChange(event) {
        this.setState({ mobile: event.target.value });
        console.log(this.state.mobile);
    }

    handleDateOfBirthChange(event) {
        this.setState({ dateOfBirth: event.target.value });
        console.log(this.state.dateOfBirth);
    }

    handleGenderChange(event) {
        this.setState({ gender: event.target.value });
        console.log(this.state.gender);
    }

    handleBioChange(event) {
        this.setState({ bio: event.target.value });
        console.log(this.state.bio);
    }

    handleInstituteNameChange(event) {
        this.setState({ instituteName: event.target.value });
        console.log(this.state.instituteName);
    }

    handleProfessionChange(event) {
        this.setState({ profession: event.target.value });
        console.log(this.state.profession);
    }

    handleBloodGroupChange(event) {
        this.setState({ bloodGroup: event.target.value });
        console.log(this.state.bloodGroup);
	}
	handleFacebookChange(event) {
        this.setState({ facebook: event.target.value });
        console.log(this.state.facebook);
    }

    handleTwitterChange(event) {
        this.setState({ twitter: event.target.value });
        console.log(this.state.twitter);
    }

    handleInstagramChange(event) {
        this.setState({ instagram: event.target.value });
        console.log(this.state.instituteName);
    }

	onSubmit (e){
		e.preventDefault();
		const imageProfile ={
			image: this.state.image,
		}
		console.log(imageProfile)
	}
    handleSubmit(event) {
        event.preventDefault();
        const data1 = {
			
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobile: this.state.mobile,
            dateOfBirth: this.state.dateOfBirth,
            gender: this.state.gender,
            bio: this.state.bio,
            instituteName: this.state.instituteName,
            profession: this.state.profession,
			bloodGroup: this.state.bloodGroup,
			facebook: this.state.facebook,
			twitter: this.state.twitter,
			instagram: this.state.instagram,
           
        };
        console.log(data1)
    }
    render() {
    return (
		
        <div className="container" >
			<div className="editHeader">
				<h1>Edit Your Profile</h1>	
			</div>
			<div className="row"> 
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
			<form onSubmit={this.onSubmit}>								
			<div className="avatar-wrapper">
				<img className="profile-pic" src=""/>	
				<div className="upload-button">
		          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
				</div>	                
				<input 
				type="file"
				id="getImage"
				name="image"
				value={this.state.image}
				required
				onChange={this.handleChange}
				accept="image/png, image/jpeg"/>
									               				                    
            </div>	
			</form>				   
			</div>
			</div>
			<div className="editProfileBody">
		<div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">	
		<form onSubmit={this.handleSubmit}>		
            <div className="row">
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">First Name:</label>
							<input 
							type="text" 
							name="first_name" 
							className="form-control"  
							value={this.state.firstName}
                            onChange={this.handleFirstNameChange}
							required></input>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Last Name: </label>
							<input 
							type="text" 
							name="last_name" 
							className="form-control"  
							value={this.state.lastName}
                            onChange={this.handleLastNameChange}
							required></input>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Mobile Number:</label>
							<input 
							type="tel" 
							name="phone" 
							className="form-control" 
							value={this.state.mobile}
                            onChange={this.handleMobileChange}
							required pattern="[0][0-9]{11}"></input>
							
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Date Of Birth:</label>
							<input 
							type="date" 
							name="birthday" 
							className="form-control" 
							value={this.state.dateOfBirth}
                            onChange={this.handleDateOfBirthChange}
							required></input>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Gender:</label>	
							<select 
							name="gender" 
							className="form-control" 
							value={this.state.gender}
							onChange={this.handleGenderChange} 
							required>
								<option value=""></option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Female">Prefer not to say</option>
							</select>	
						</div>
					</div>
				</div>
                <div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Institute Name:</label>
							<input 
							type="text" 
							name="institute_name" 
							className="form-control" 
							value={this.state.instituteName}
                            onChange={this.handleInstituteNameChange}
							required></input>
						</div>
					</div>
				</div>
                <div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Profession:</label>
							<input 
							type="text" 
							name="profession" 
							className="form-control" 
							value={this.state.profession}
                            onChange={this.handleProfessionChange}
							required></input>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
			                <label className="profile_details_text" for="url">Facebook URL:</label>
			                <input 
			                type="url"
			                name="url" 
			                id="url"
                            placeholder="https://facebook.com"
							pattern="https://.*" 
							size="30"
							className="form-control" 
							value={this.state.facebook}
                            onChange={this.handleFacebookChange}
                            required></input>
					    </div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
			                <label className="profile_details_text" for="url">Twitter URL:</label>
			                <input 
			                type="url"
			                name="url" 
			                id="url"
                            placeholder="https://twitter.com"
							pattern="https://.*" 
							size="30"
							className="form-control" 
							value={this.state.twitter}
                            onChange={this.handleTwitterChange}
                            required></input>
					    </div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
			                <label className="profile_details_text" for="url">Instagram URL:</label>
			                <input 
			                type="url"
			                name="url" 
			                id="url"
                            placeholder="https://instagram.com"
							pattern="https://.*" 
							size="30"
							className="form-control" 
							value={this.state.instagram}
                            onChange={this.handleInstagramChange}
                            required></input>
					    </div>
					</div>
				</div>
                <div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Blood Group:</label>
							<select 
							name="blood_group" 
							className="form-control" 
							value={this.state.bloodGroup}
                            onChange={this.handleBloodGroupChange}
							required >
							<option value=""></option>
								<option value="APlus">A+</option>
								<option value="BPlus">B+</option>
                                <option value="ABPlus">AB+</option>
                                <option value="OPlus">O+</option>
                                <option value="ONeg">O-</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<p>
							<label className="profile_details_text">Bio:</label>
							<textarea 
							type="text" 
							name="bio" 
							rows="5"
							className="form-control"  
							value={this.state.bio}
                            onChange={this.handleBioChange}
							></textarea>
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
						<div className="form-group">
							<input type="submit" className="btn btn-success" value="Submit"></input>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
	</div>
    );
}
}

