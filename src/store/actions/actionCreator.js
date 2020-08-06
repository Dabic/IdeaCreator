import axios from "../../axios-conf";

export const createIdea = (idea) => {
    return {
        type: 'CREATE_IDEA',
        idea: idea
    }
};

export const saveIdeas = (ideas) => {
    return {
        type: 'FETCH_IDEAS',
        ideas: ideas
    }
};

export const fetchIdeas = () => {
    return dispatch => {
        axios.get('ideas.json')
            .then(response => {
                console.log('cao')
                dispatch(saveIdeas(response.data));
            });
    };
};

export const deleteIdea = (idea) => {
    return {
        type: 'DELETE_IDEA',
        idea: idea
    }
};

export const updateIdea = (idea) => {
    return {
        type: 'UPDATE_IDEA',
        idea: idea
    }
};
export const addCategory = (category) => {
    return {
        type: 'CREATE_CATEGORY',
        category: category
    }
};

export const createCategory = (category) => {
    return dispatch => {
        axios.post('category.json', category)
            .then(response => {
                dispatch(addCategory(category));
            });
    };
};

export const saveCategories = (categories) => {
    return {
        type: 'FETCH_CATEGORIES',
        categories: categories
    }
}
export const fetchCategories = () => {
    return dispatch => {
        axios.get('category.json')
            .then(response => {
                dispatch(saveCategories(response.data));
            });
    };
};

export const updateCategory = (category) => {
    return {
        type: 'UPDATE_CATEGORY',
        category: category
    }
};

export const deleteCategory = (category) => {
    return {
        type: 'DELETE_CATEGORY',
        category: category
    }
};
