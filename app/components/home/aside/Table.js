import React from "react";

class Table extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collapsed: false
        }
    }
    render(){
        return (
            <div>
                <ul>
                    <li>aa</li>
                    <li>bb</li>
                    <li>cc</li>
                </ul>
            </div>
        );
    }
}

export default Table;