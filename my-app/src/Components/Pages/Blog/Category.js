import React, { useState, useEffect } from 'react';
import { Route, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Post from './Post';
import Badge from 'react-bootstrap/Badge';
import PostsService from './../../../services/PostsServices';

/**
 * Component for showing the Category page.
 * 
 * @component
 * @example
 * return (
 *   <Category />
 * )
 */
const Category = () => {
    const { categoryId, postId } = useParams();

    const [currentCategoryId, setCurrentCategoryId] = useState(null);
    const [currentPostId, setCurrentPostId] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if(categoryId) {
            setCurrentCategoryId(categoryId);
            const data = PostsService.getPostByCategoryId(categoryId)
            setPosts(data);
        }
        if(postId) {
            setCurrentPostId(postId);
        }
    }, [categoryId, postId]);

    return (
        <div className="page">
            <Jumbotron className="category">
                {currentCategoryId && (
                    <div className="post-list">
                        <ul>
                            {posts && posts.length > 0 && posts.map((post, index) => (
                                <li key={index}>
                                    <a href={`/blog/categories/${currentCategoryId}/posts/${post.id}`}>{post.title}</a>
                                    {currentPostId && Post.id === currentPostId && (
                                        <Badge variant="primary">Selected</Badge>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Jumbotron>
            <Route path={`/blog/categories/:categoryId/posts/:postId`} component={Post} />
        </div>
    );
}

export default Category;