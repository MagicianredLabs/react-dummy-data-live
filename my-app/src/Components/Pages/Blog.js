import React, { useEffect, useState } from 'react';
// import { Route, useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
// import CategoriesService from './../../services/CategoriesServices';
// import Category from '../Pages/Blog/Category';
import PostsServices from './../../services/PostsServices';

/**
 * Component for showing the Blog page. 
 * 
 * @component
 * @example
 * return (
 *   <Blog />
 * )
 */
const Blog = () => {
    // const { categoryId } = useParams();

    // const [currentCategoryId, setCurrentCategoryId] = useState(null);
    // const [categories, setCategories] = useState(null);

    // useEffect(() => {
    //     setCategories(CategoriesService.getAllCategories());
    // }, []);

    // useEffect(() => {
    //     if(categoryId) {
    //         setCurrentCategoryId(categoryId);
    //     }
    // }, [categoryId]);
    const [currentPostId, setCurrentPostId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const data = PostsServices.getAllPosts()
        if(data instanceof Promise) {
            data.then((resp) => {
                setPosts(resp);
            })
            .catch((err) => {
                console.error('Si è verificato un errore', {err})
            })
            setLoading(false)
        } else {
            setPosts(data)
            setLoading(false)
        }
    }, []);

    useEffect(() => {
        if(currentPostId) {
            setCurrentPostId(currentPostId);
        }
    }, [currentPostId]);

    return (
        <>
            <div className="page">
                <h1>Blog page</h1>
            </div>
            {loading && (<div>loading...</div>)}
            {/* <div className="category-list">
                <ul>
                    {categories && categories.length > 0 && categories.map((category, index) => (
                        <li key={index}>
                            <a href={`/blog/categories/${category.id}`}>{category.title}</a>
                            {currentCategoryId && category.id === +currentCategoryId && (
                                <Badge variant="primary"><small>[Selected]</small></Badge>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <Route path={`/blog/categories/:categoryId`} component={Category} /> */}
            <div className="post-list">
                <ul>
                    {posts && posts.length > 0 && posts.map((post, index) => (
                        <li key={index}>
                            <a href={`/blog/posts/${post.id}`}>
                                {post.title}</a>
                            {currentPostId && post.id === currentPostId && (
                                <Badge variant="primary">Selected</Badge>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Blog;