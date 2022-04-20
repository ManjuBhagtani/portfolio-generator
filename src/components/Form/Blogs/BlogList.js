import React from 'react';
import NewBlogForm from './NewBlogForm';
import Blog from './Blog';
import { connect } from 'react-redux';
import { removeBlog } from './actions';

const BlogList = ({ blogs = [], onRemovePressed }) => {
    return(
    <div>
        <NewBlogForm />
        <div className="container mb-3">
            {blogs.map(blog => <Blog blog={blog} onRemovePressed={onRemovePressed}/>)}
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    blogs: state.blogs,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: blog => dispatch(removeBlog(blog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);