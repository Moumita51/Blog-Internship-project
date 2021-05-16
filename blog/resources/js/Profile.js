import React from "react";
import ReactDOM from "react-dom";


export default class Profile extends React.Component {
    render(){
    
        return(
<div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                       Blogger
                                    </h6>
                                    <p className="proile-rating">FOLLOWERS : <span>12k</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="blog-tab" data-toggle="tab" href="#blog" role="tab" aria-controls="blog" aria-selected="false">Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti Ghelani</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>kshitighelani@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                          
                            <div className="tab-pane fade" id="blog" role="tabpanel" aria-labelledby="blog-tab">       
                                <div className="row "> 
                                <div className="col-md-4">
                                    <a href="#"> 
                                          <img className="blog_content_image" src="https://image.freepik.com/free-vector/bokeh-lights-effect-dark-background_52683-33179.jpg"></img>
                                     </a>
                                </div>
                                <div className="col-md-6">
                                    <p className="blog_content_des">Loreum Ipsum is simply dummy text of the printing and typesetting imdustry simply dummy text of the printing. Loreum Ipsum is simply dummy text of the printing and typesetting imdustry simply dummy text of the printing.
                                      Show more...</p>
                                </div>            
                              </div> 
                              <div className="row "> 
                                <div className="col-md-4">
                                    <a href="#"> 
                                          <img className="blog_content_image" src="https://img.etimg.com/thumb/msid-66441800,width-650,imgsize-911160,,resizemode-4,quality-100/lanterns-lights-diwali-decor-festive-party-gettyimages-812896714.jpg"></img>
                                     </a>
                                </div>
                                <div className="col-md-6">
                                    <p className="blog_content_des">Loreum Ipsum is simply dummy text of the printing and typesetting imdustry simply dummy text of the printing. Loreum Ipsum is simply dummy text of the printing and typesetting imdustry simply dummy text of the printing.
                                      Show more...</p>
                                </div>            
                              </div>                                                                                                          
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>   
        );
       
    }
}


if (document.getElementById("profile")) {
    ReactDOM.render(<Profile />, document.getElementById("profile"));
}
