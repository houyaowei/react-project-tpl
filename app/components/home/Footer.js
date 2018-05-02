import React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const style={
            height: "40px",
            color: "#fff",
            textAlign: "center",
            paddingTop: "20px"
        }
        return (
            <footer style={style}>
                <span>@2018西安华信智慧数字科技有限公司</span>
            </footer>
        );
    }
}

export default Footer;