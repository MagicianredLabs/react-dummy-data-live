import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import PostsService from './../../../services/PostsServices';

/**
 * Component for showing the Post page.
 * 
 * @component
 * @example
 * return (
 *   <Post />
 * )
 */
const Post = () => {
    const { postId } = useParams();

    const [, setCurrentPostId] = useState(null);
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        if(postId) {
            const post = PostsService.getPostById(postId);
            setCurrentPostId(postId);
            setCurrentPost(post);
        }
    }, [postId]);

    return (
        <div className="post-details">
            <Jumbotron className="page post">
                {currentPost && (
                    <div className="post-details">
                        <h3>{currentPost.title}</h3>
                        <p>{currentPost.description}</p>
                        <p>{currentPost.text}</p>
                    </div>
                )}
            </Jumbotron>
        </div>
    );
}

export default Post;