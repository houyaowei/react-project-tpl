import React from "react";
import {ProgressBar} from "react-bootstrap";

class Progress extends React.Component {
    render(){
        return (
            <div>
                <h4>ProgressBar</h4>
                <ProgressBar active bsStyle="success" now={40} />
                <ProgressBar active bsStyle="info" now={20} />
                <ProgressBar active bsStyle="warning" now={60} />
                <ProgressBar active bsStyle="danger" now={80} />
            </div>
        );
    }
};
export default Progress;