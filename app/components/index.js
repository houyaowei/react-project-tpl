import React from "react";
//import Login from "./login/Login";
import LoginContainer from  "./login/LoginContainer"

class Portal extends React.Component {
    render(){
        return (
            <div style={{margin: "0 auto" }}>
                <LoginContainer />
            </div>
        );
    }
}
export default Portal;