export const CREATE_BLOG = 'CREATE_BLOG';

export const createBlog = blog => ({
    type: CREATE_BLOG,
    payload: {blog}
});

export const REMOVE_BLOG = 'REMOVE_BLOG';

export const removeBlog = blog => ({
    type: REMOVE_BLOG,
    payload: {blog}
});
