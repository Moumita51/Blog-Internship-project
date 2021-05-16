import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            title: "",
            description: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(e) {
        loadImage(e);
        this.setState({ image: e.target.value });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onEditorChange(content) {
        this.setState({ description: content })
    }
    onSubmit(e) {
        e.preventDefault();
        const blog_post = {
            image: this.state.image,
            title: this.state.title,
            description: this.state.description
        };
        console.log(blog_post);
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className="container blogPost">
                    <div className="image-input">
                        <label
                            id="getLabel"
                            className="getLabel"
                            htmlFor="getImage"
                        >
                            Upload Blog Cover Photo
                        </label>
                        <input
                            type="file"
                            id="getImage"
                            name="image"
                            value={this.state.image}
                            required
                            onChange={this.handleChange}
                        />
                        <img id="output" />
                    </div>
                    <div className="title-input">
                        <input
                            type="text"
                            name="title"
                            placeholder=" HEADING TITLE"
                            required
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="description">
                        <Editor

                            init={{
                                selector: 'textarea',
                                plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                                imagetools_cors_hosts: ['picsum.photos'],
                                menubar: 'file edit view insert format tools table help',
                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap emoticons |  preview | insertfile image media template link | ltr rtl',
                                toolbar_sticky: true,
                                autosave_ask_before_unload: true,
                                autosave_interval: '30s',
                                autosave_prefix: '{path}{query}-{id}-',
                                autosave_restore_when_empty: false,
                                autosave_retention: '2m',
                                image_advtab: true,
                                link_list: [
                                    { title: 'My page 1', value: 'http://www.tinymce.com' },
                                    { title: 'My page 2', value: 'http://www.moxiecode.com' }
                                ],
                                image_list: [
                                    { title: 'My page 1', value: 'http://www.tinymce.com' },
                                    { title: 'My page 2', value: 'http://www.moxiecode.com' }
                                ],
                                image_class_list: [
                                    { title: 'None', value: '' },
                                    { title: 'Some class', value: 'class-name' }
                                ],
                                importcss_append: true,
                                file_picker_callback: function (callback, value, meta) {
                                    /* Provide file and text for the link dialog */
                                    if (meta.filetype === 'file') {
                                        callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
                                    }

                                    /* Provide image and alt text for the image dialog */
                                    if (meta.filetype === 'image') {
                                        callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
                                    }

                                    /* Provide alternative source and posted for the media dialog */
                                    if (meta.filetype === 'media') {
                                        callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
                                    }
                                },
                                templates: [
                                    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                                    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                                    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
                                ],
                                template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                                template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                                height: 600,
                                image_caption: true,
                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                noneditable_noneditable_class: 'mceNonEditable',
                                toolbar_mode: 'sliding',
                                contextmenu: 'link image imagetools table',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={this.onEditorChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}
const loadImage = e => {
    const label = document.getElementById("getLabel");
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(e.target.files[0]);
    image.classList.add("getLabel");
    label.style.display = "none";
};
export default BlogPost;
