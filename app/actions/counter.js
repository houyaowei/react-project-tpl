import * as types from "../constants/ActionTypes";

export const increate = () => {
    dispatch({
        type: types.INCREATMENT_NUMBER
    })
}