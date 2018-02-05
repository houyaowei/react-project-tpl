import React from "react";
import Login from "./login/Login";

import "antd/dist/antd.css"

class Portal extends React.Component {
    render(){
        return (
            <div style={{margin: "0 auto" }}>
                <Login />
            </div>
        );
    }
}
export default Portal;