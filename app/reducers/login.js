import * as types from '../constants/ActionTypes'
import Immutable from 'immutable'

const initState = Immutable.Map({
  login: false
});

const login = (state = initState, action) => {
    switch(action.type){
        case types.LOGIN :
            return state.set("login", true);    
        default:
            return state;    
    }
}

export default login;