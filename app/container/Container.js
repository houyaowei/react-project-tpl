import React from "react";
import Header from "../components/home/Header";
import "../assets/css/app.css";

class Container extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <div className="main-layout">{children}</div>
      </div>
    );
  }
}

export default Container;
