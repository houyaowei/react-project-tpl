import * as types from "../constants/ActionTypes";

export const increate = () => {
    dispatch({
        type: types.INCREATMENT_NUMBER
    })
}
export const login = (value) => {
    console.log("action->login");
    return {
        type: types.LOGIN
    }
}