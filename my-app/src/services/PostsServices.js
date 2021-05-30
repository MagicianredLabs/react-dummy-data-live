import PostsStore from './../stores/PostsStore';

// Simulate POST posts
const addPost = (item) => {
    PostsStore.addItem(item);
}

// Simulate DELETE posts/:id
const deletePostById = (id) => {
    PostsStore.removeItemById(id);
}

// Simulate PUT posts/:id
const updatePostById = (id, values) => {
    const item = getPostById(id);
    if (!item) {
        return null;
    }
    Object.assign(item, values);
    return item;
}

// Simulate GET posts
const getAllPosts = () => {
    return PostsStore.getItems();
}

// Simulate GET posts/:id
const getPostById = (id) => {
    return PostsStore.getItems()
        .filter(item => item.id === +id)
        .pop();
}

const getPostByCategoryId = (categoryId) => {
    return PostsStore.getItemsByCategoryId(categoryId);
}

/**
 * Service class to handle retrieve of items data
 */
 export const PostsService = {
    addPost,
    deletePostById,
    updatePostById,
    getAllPosts,
    getPostById,
    getPostByCategoryId,
}

export default PostsService