import React from "react";
import { Link } from "react-router-dom";

// const lorem = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ipsa?</p>
// const img = <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg" alt=""/>

function Popular() {
    const name = <p>Technology Blogs</p>;
    return (
        <div className="popular">
            <div className="popular-header">
                <p>Popular on Amari</p>
            </div>
            <div className="popular-body">
                <ul>
                    <li>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
                            alt=""
                        />
                        <div>
                            <h5>{name}</h5>
                            <Link to="/popular/1">
                                <p>
                                    Lorem, ipsum dolor sit 
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
                            alt=""
                        />
                        <div>
                            <h5>{name}</h5>
                            <Link to="/popular/1">
                                <p>
                                    Lorem, ipsum dolor sit 
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
                            alt=""
                        />
                        <div>
                            <h5>{name}</h5>
                            <Link to="/popular/1">
                                <p>
                                    Lorem, ipsum dolor sit 
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
                            alt=""
                        />
                        <div>
                            <h5>{name}</h5>
                            <Link to="/popular/1">
                                <p>
                                    Lorem, ipsum dolor sit 
                                </p>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
                            alt=""
                        />
                        <div>
                            <h5>{name}</h5>
                            <Link to="/popular/1">
                                <p>
                                    Lorem, ipsum dolor sit 
                                </p>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Popular;
