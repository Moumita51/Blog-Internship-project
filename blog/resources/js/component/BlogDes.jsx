import React, { component } from "react";

export default class BlogDes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <section>
                <div className="blog_content">
                    <p>
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing.
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing.
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the
                        printing.Loreum Ipsum is simply dummy text of the
                        printing and typesetting imdustry simply dummy text of
                        the printing.
                    </p>
                    <div className="side_line">
                        <p className="blog_content_indent">
                            Loreum Ipsum is simply dummy text of the printing
                            and typesetting imdustry simply dummy text of the
                            printing. Loreum Ipsum is simply dummy text of the
                            printing and typesetting imdustry simply dummy text
                            of the printing Loreum Ipsum is simply dummy text of
                            the printing
                        </p>
                    </div>
                </div>
                <div className="blog_content">
                    <p>
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing.
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing
                        Loreum Ipsum is simply dummy text of the printing and
                        typesetting imdustry simply dummy text of the printing.
                    </p>
                    <div className="side_line">
                        <p className="blog_content_indent">
                            Loreum Ipsum is simply dummy text of the printing
                            and typesetting imdustry simply dummy text of the
                            printing. Loreum Ipsum is simply dummy text of the
                            printing and typesetting imdustry simply dummy text
                            of the printing Loreum Ipsum is simply dummy text of
                            the printing
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="like">
                        <span  onClick={this.handleClick}>
                            <i
                               
                                className="fa fa-thumbs-o-up"
                                aria-hidden="true"
                            />
                        </span>
                        <h6> {this.state.count} Likes</h6>
                    </div>

                    
                </div>
            </section>
        );
    }
}
