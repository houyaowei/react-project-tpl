import * as types from '../constants/ActionTypes'
import Immutable from 'immutable'
import history from "../routes/history"

const initState = Immutable.Map({
    loginStatus: false
});

const login = (state = initState, action) => {
    switch(action.type){
        case types.LOGIN_SAGA:
            console.log("reducer->login");
            history.push("/home", {loginStatus:true});
            return state.set("loginStatus", action.loginStatus.login);  

        case types.LOGOUT_SAGA:
            console.log("reducer->logout");
            history.push("/login");
            return state.set("loginStatus", false);  
            
        default:
            return state;    
    }
}

export default login;