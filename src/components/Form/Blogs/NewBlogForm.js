import React, { useState } from "react";
import { connect } from "react-redux";
import { createBlog } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewBlogForm = ({ blogs=[], onCreatePressed }) =>{

    const [blogTitle, setBlogTitle] = useState('');
    //const [dateWritten, setDateWritten] = useState(' ');
    const [link, setLink] = useState('');
    return(
    <div className="border rounded bg-light p-3 m-2">
        <input 
            className="form-control form-control-sm mb-2"
            type="text"
            placeholder="Blog Title"
            value={blogTitle}
            onChange={e => setBlogTitle(e.target.value)}
        />
        <input 
            className="form-control form-control-sm mb-2"
            type="text"
            placeholder="Blog Link"
            value={link}
            onChange={e => setLink(e.target.value)}
        />     
        <div className="text-right">
            <button 
                className="btn btn-success btn-sm rounded-circle"
                disabled={blogTitle === '' || link === ''}
                onClick={()=>{
                    onCreatePressed({blogTitle, link});
                    setBlogTitle('');
                    setLink('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    blogs: state.blogs,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: blog => dispatch(createBlog(blog)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewBlogForm);
