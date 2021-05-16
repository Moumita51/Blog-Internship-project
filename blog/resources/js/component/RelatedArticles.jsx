import React, { Component } from "react";

export default class RelatedArticles extends Component {
    render() {
        return (
            <>
                <div className="headingRA mb-2">Related Articles</div>
                <div id='relatedarticles' className="row">
                <div className="col-sm-12 col-md-4">
                    <a href="#" className="card mb-2">
                                <img
                                    className="card-img img-fluid"
                                    src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg"
                                />
                                <div className="card-img-overlay"><p className='tag'>TECHNOLOGY</p></div>
                                
                            </a>
                    </div>
                    <div className="col-sm-12 col-md-4">
                    <a href="#" className="card mb-2">
                                <img
                                    className="card-img img-fluid"
                                    src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg"
                                />
                                <div className="card-img-overlay"><p className='tag'>TECHNOLOGY</p></div>
                                
                            </a>
                    </div>
                    <div className="col-sm-12 col-md-4">
                    <a href="#" className="card mb-2">
                                <img
                                    className="card-img img-fluid"
                                    src="https://2.bp.blogspot.com/-dxCViGOcl_Y/Tp8keI89pMI/AAAAAAAAABA/jDUclqLR3C0/s1600/1925819_f520.jpg"
                                />
                                <div className="card-img-overlay"><p className='tag'>TECHNOLOGY</p></div>
                                
                            </a>
                    </div>
                    
                </div>
            </>
        );
    }
}
