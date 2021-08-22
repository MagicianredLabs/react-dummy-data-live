import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Blog from '../Pages/Blog';
import Post from '../Pages/Blog/Post';

/**
 * Functional Component for handle routes to Blog Section.
 * 
 * @component
 * @example
 * return (
 *   <BlogSection />
 * )
 */
const BlogSection = withRouter(props => {
    return (
        <>
            <Route exact path={`${props.match.url}`} component={Blog} />
            <Route path={`${props.match.url}/categories/:categoryId`} component={Blog} />
            <Route path={`${props.match.url}/posts/:postId`} component={Post} />
        </>
    )}
);

export default BlogSection;