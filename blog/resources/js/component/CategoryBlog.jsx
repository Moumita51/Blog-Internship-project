import React from "react";

const CategoryBlog = props => {

    return (
        <div className="category-blog">
            <img
                src="https://mk0knownnewsql4vbcfb.kinstacdn.com/wp-content/uploads/2020/08/tit-990x557.jpg"
            />

            <h5>{props.title}</h5>
            <p>
                By {props.author} | {props.time}
            </p>
        </div>
    );
};
export default CategoryBlog;
