import React from "react";
import Header from "./Header";

class Home extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collapsed: false
        }
    }
    render(){
        return (
            <div>
                this is dashboard
            </div>
        );
    }
}
Home.defaultProps = {
}
export default Home;