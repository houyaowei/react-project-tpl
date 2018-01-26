import React from "react";
import {Table} from "react-bootstrap";

import Login from "./login/Login";
import Home from "./home/Home";
import NavBar from "./home/NavBar";
import Progress from "./home/Progress";
import CarouselBar from "./home/Carousel";
import Images from "./home/Images";

class Portal extends React.Component {
    render(){
        return (
            <div>
                <Login />
                <NavBar />
                <CarouselBar />
                <Home />
                <Progress />
                <Images />
            </div>
        );
    }
}
export default Portal;