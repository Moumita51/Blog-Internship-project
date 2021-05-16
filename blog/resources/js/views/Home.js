import React from "react";
import { Link } from "react-router-dom";
import Slider from "../component/Slider";
import BlogStyle1 from "../component/blogStyle1";
import NewBlog from "../component/NewBlog";
import BlogStyle2 from "../component/blogStyle2";
import Popular from "../component/Popular";

const Home = () => {
    let categoryList = [
        "Machine Learning",
        "Research",
        "Technology",
        "Artificial Intelligence",
        "Business"
    ];
    let category = categoryList.map((name,index) => (
        <Link key={index} to={`/category/${name}`}>
            <Slider name={name} />
        </Link>
    ));
    return (
        <div className="container home">
            <div className="home-section1">
                {category}
            </div>

            {/* //home-section 2 */}
            <div className="home-section2">
                <BlogStyle1 />
                <NewBlog />
            </div>
            {/* //home-section 3 */}
            <div className="home-section3">
                <div className="section-left">
                    <BlogStyle2 name="Technology Blogs" />
                    <div className="section-left-item">
                        <div className="item-left">
                            <BlogStyle2 name="Business Blogs" />
                            <BlogStyle2 name="Technology Blogs" />
                        </div>
                        <div className="item-right">
                            <BlogStyle2 name="Research Blogs" />
                            <BlogStyle2 name="Machine Learning Blogs" />
                        </div>
                    </div>
                </div>
                <div className="section-right">
                    <BlogStyle2 name="Business Blogs" />
                    <BlogStyle2 name="Research Blogs" />
                    <Popular />
                </div>
            </div>
        </div>
    );
};
export default Home;
