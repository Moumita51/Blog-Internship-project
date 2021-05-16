import React from "react";
import BlogDes from "../component/BlogDes";
import CommentPost from "../component/CommentPost";
import RelatedArticles from "../component/RelatedArticles";
function BlogShow() {
    return (
        <div className="container blog-show">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <img
                        className="img-fluid cover-img"
                        src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg"
                    />
                </div>
            </div>
            <h5>Loreum Ipsum is simply dummy text of the printing</h5>
            <p>30 Aug 2020 . 21 views</p>
            <div className="blogAuthor">
                <img src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg" />
                <a href="#">Sakeena Rajik</a>
            </div>

            <div className="share">
                <div className="share-button">
                    <span>
                        <i className="fa fa-share-alt" aria-hidden="true" />{" "}
                        Share!
                    </span>
                    <a href="#">
                        <i className="fa fa-google" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </div>
                <div className="bookmark">
                    {" "}
                    <a href="#">
                        <i className="fa fa-bookmark" aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="">
                <BlogDes />
            </div>

            <div className="">
                <CommentPost />
            </div>
            <div>
                <RelatedArticles />
            </div>
        </div>
    );
}

export default BlogShow;
