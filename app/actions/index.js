import * as types from "../constants/ActionTypes";

export const increate = () => {
    dispatch({
        type: types.INCREATMENT_NUMBER
    })
}
export const login = () => {
    return {
        type: types.LOGIN
    }
}