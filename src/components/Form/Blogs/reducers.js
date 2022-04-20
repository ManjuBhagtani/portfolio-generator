import { CREATE_BLOG, REMOVE_BLOG } from "./actions";

export const blogs = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_BLOG:{
            const {blog} = payload;
            return state.concat(blog);
        }
        case REMOVE_BLOG: {
            const {blog} = payload;
            return state.filter(b => b.blogTitle !== blog.blogTitle);
        }
        default: 
            return state;
    }
}