import React from "react";

const LatestBlog = props => {

    return (
        // <div className="category-blog">
        //     <img
        //         src="https://mk0knownnewsql4vbcfb.kinstacdn.com/wp-content/uploads/2020/08/tit-990x557.jpg"
        //     />

        //     <h5>{props.title}</h5>
        //     <p>
        //         By {props.author} | {props.time}
        //     </p>
        // </div>


    // bootstrap card code start from here


    <div className="card"  className="category-blog " className="border1"  >
            <img  className="card-img-top"  
                src="https://mk0knownnewsql4vbcfb.kinstacdn.com/wp-content/uploads/2020/08/tit-990x557.jpg"
            />
            <div className="card-body">
            <h5>{props.title}</h5>
            <p className="card-text">
                By {props.author} | {props.time}
            </p>
            </div>
        </div>

    );
};
export default LatestBlog;
