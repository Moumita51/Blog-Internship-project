import React ,{ Component }from 'react';


export default class CommentPost extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    
      comment: '' ,
      commentLikeCount: 0,
      

    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this)
    


  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});

  }
  handleSubmit(event) {

    console.log(this.state.comment)
    event.preventDefault();
    

  }
  handleClick() {
    this.setState({ commentLikeCount: this.state.commentLikeCount + 1 });
}

  render () {
    return (

      <div>
    <form onSubmit={this.handleSubmit}>
    <div className="comment-box">
      
      <a className="pull-left" href="#">
                        <img className="media-object" 
                        src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg" alt="" />
                    </a>
      <input className="commentInputStyle"  placeholder='Add your Comment..' value={this.state.comment} onChange={this.handleCommentChange} />
      </div>
     
    <button type="submit" className="submitButton" >Comment</button>
  </form>
      


  <div className="comment-box">
                <img className="media-object" src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg"
                    alt="Avatar" />


                <div className="commentCommentStyle"  >
                  <div className="comment"> Cras sit amet nibh libero, in gravida nulla. Nulla vel</div> 
                  <span className="commentDate"> September 25 &nbsp;
                  <i onClick={this.handleClick}  className="fa fa-thumbs-o-up like:hover" aria-hidden="true"/>
                    &nbsp; {this.state.commentLikeCount } &nbsp;Likes 
                    </span> 

                  
                  </div>
          
                

            </div>
               
            <div className="more_responses">
                      <a href="#" >More Responses</a>
                  </div>
  </div>
  
    )
  }
}