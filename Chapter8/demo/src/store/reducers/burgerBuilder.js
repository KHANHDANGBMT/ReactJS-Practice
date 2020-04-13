import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT: {
            const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updateIngredients = updateObject(state.ingredients, updateIngredient);
            const updateState = {
                ingredients: updateIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updateState);
        }
        case actionType.REMOVE_INGREDIENT: {
            const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updateIngredients = updateObject(state.ingredients, updateIngredient);
            const updateState = {
                ingredients: updateIngredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updateState);
        }
        case actionType.SET_INGREDIENTS: {
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice:4,
                error: false,
                building: false
            });
        }
        case actionType.FETCH_INGREDIENT_FAILED: {
            return updateObject(state, {error: true})
        }
    }
    return state;
}

export default reducer;
