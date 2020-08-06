import * as actionTypes from '../actions/actions'

const initialState = {
    ideas: [],
    loading: false,
    categories: [],
    categoryOptions: []
};

const reducer = (state=initialState, action) => {
    const updatedCategories = [...state.categories];
    switch (action.type) {
        case actionTypes.FETCH_IDEAS:
            return {
                ...state,
                ideas: action.ideas
            };
        case actionTypes.FETCH_CATEGORIES:
            console.log(Object.keys(action.categories).map(key => action.categories[key].name))
            return {
                ...state,
                categories: Object.keys(action.categories).map(key => action.categories[key].name)
            };
        case actionTypes.CREATE_CATEGORY:
            updatedCategories.push(action.category.name);
            return {
                ...state,
                categories: updatedCategories
            };
        default:
            return state;
    }
}

export default reducer;
