import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
import { Checkbox } from 'antd';

class CheckboxItem extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        let style = {
            marginRight: "20",
        }
        return (
            <div>
                <span style={style}>{this.props.funcName}</span>
                {
                    _.map(this.props.subFuncName,function(ele){
                        let r = Math.random();
                        return (
                            <Checkbox key={r}>{ele.name}</Checkbox>
                        )
                    })
                }
                <hr/>
            </div>
        );
    }
}
CheckboxItem.propTypes = {
    funcName: PropTypes.string,
    subFuncName : PropTypes.array
}
CheckboxItem.defaultProps = {
    funcName: "",
    subFuncName : []
}
export default CheckboxItem;