import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, onRemovePressed}) =>{
    return(    
        <div className="card bg-light pb-1 pr-1 mb-1 small">
            <div className="card-body">
                <div className="row"> 
                    <div className="col-xl-2 col-3">Blog Title: </div>
                    <div className="col-xl-4 col-9">{blog.blogTitle}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Date Written:</div>
                    <div className="col-sm-10">{blog.dateWritten}</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">Blog Link:</div>
                    <div className="col-sm-10">{blog.link}</div>
                </div>
            </div>
            <div className="text-right">
                <button 
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => onRemovePressed(blog)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
       </div>
    )
}

export default Blog;
