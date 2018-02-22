import * as types from '../constants/ActionTypes'
import Immutable from 'immutable'

const initState = Immutable.Map({
    loginStatus: false
});

const login = (state = initState, action) => {
    switch(action.type){
        case types.LOGIN_SAGA:
            console.log("reducer->login");
            return state.set("loginStatus", action.loginStatus.login);    
        default:
            return state;    
    }
}

export default login;