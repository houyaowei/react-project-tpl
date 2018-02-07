import * as types from '../constants/ActionTypes'
import Immutable from 'immutable'

const initState = Immutable.Map({
  count: 0 
});

const increation = (state = initState, action) => {
    switch(action.type){
        case types.INCREATMENT_NUMBER :
            return state.set("count", 6);
        default:
            return state;    
    }
}

export default increation;