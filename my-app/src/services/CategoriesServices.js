import CategoriesStore from './../stores/CategoriesStore';

// Simulate POST /categories
const addCategories = (item) => {
    CategoriesStore.addItem();
}

// Simulate DELETE /categories/:id
const deleteCategoryById = (id) => {
    CategoriesStore.removeItemById(id);
}

// Simulate PUT /categories/:id
const updateCategoryById = (id, values) => {
    const item = getCategoryById(id);
    if (!item) {
        return null;
    }
    Object.assign(item, values);
    return item;
}

// Simulate GET /categories
const getAllCategories = () => {
    return CategoriesStore.getItems();
}

// Simulate GET /categories/:id
const getCategoryById = (id) => {
    return CategoriesStore.getItems()
        .filter(item => item.id === id)
        .pop();
}


/**
 * Service class to handle retrieve of categories data
 */
 export const CategoriesService = {
    addCategories,
    deleteCategoryById,
    updateCategoryById,
    getAllCategories,
    getCategoryById,
}

export default CategoriesService