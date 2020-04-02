export const INCREMENT = "INCREMENT";
export const ADD = "ADD";
export const DECREMENT = "DECREMENT";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};

const saveResult = (value) =>{
    return {
        type: STORE_RESULT,
        result: value
    } 
}

export const storeResult = (value) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            dispatch(saveResult(value))
        } , 2000)
    }
};


export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultId: id
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};
