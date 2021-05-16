import React from "react";

import CategoryBlog from "../component/CategoryBlog";
import { Link,useRouteMatch } from "react-router-dom";


const LatestBlogs = () => {
    let {url} = useRouteMatch();
    return (
        <>
        <div className="category top container" >
                <h1>Latest Blogs</h1>
        {/* some changes  */}
       
         <div className="category-section1 " className="d-inline-flex p-1"  >
        <div className="row">      
                <div className="col-sm-12 col-md-6 col-lg-4 ">
               <Link to={`${url}/${1}`}>
                <CategoryBlog
                    title="Apple Watch-1"
                    author="Amir Khan"
                    time="20 Min Ago"
                /></Link>
                </div>              
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <Link to={`${url}/${2}`}>
                <CategoryBlog
                    title="Apple Watch-2"
                    author="Amir Khan"
                    time="20 Min Ago"
                /></Link>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                </div>
                 
            </div>

            
            <div className="category-section2" className="d-inline-flex p-1">
            <div className="row">    
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-1"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-2"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                </div>
                </div>        
                    <div className="category-section2" className="d-inline-flex p-1">
         <div className="row">              
         <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-1"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-2"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                <CategoryBlog
                    title="Apple Watch-3"
                    author="Amir Khan"
                    time="20 Min Ago"
                />
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default LatestBlogs;
