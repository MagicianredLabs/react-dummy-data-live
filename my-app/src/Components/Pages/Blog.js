import React, { useEffect, useState } from 'react';
import { Route, useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import CategoriesService from './../../services/CategoriesServices';
import Category from '../Pages/Blog/Category';

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
    const { categoryId } = useParams();

    const [currentCategoryId, setCurrentCategoryId] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        setCategories(CategoriesService.getAllCategories());
    }, []);

    useEffect(() => {
        if(categoryId) {
            setCurrentCategoryId(categoryId);
        }
    }, [categoryId]);

    return (
        <>
            <div className="page">
                <h1>Blog page</h1>
            </div>
            <div className="category-list">
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
            <Route path={`/blog/categories/:categoryId`} component={Category} />
        </>
    );
}

export default Blog;