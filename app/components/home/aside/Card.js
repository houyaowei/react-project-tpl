import React from "react";

class Card extends React.Component {
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
                    <li>dd</li>
                    <li>ee</li>
                    <li>ff</li>
                </ul>
            </div>
        );
    }
}

export default Card;