import React from "react";
import {Navbar,NavItem,Nav,NavDropdown,MenuItem} from "react-bootstrap";
class NavBar extends React.Component {
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">西安华信数字智慧</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        首页
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        产品中心
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        行业案例
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        关于我们
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
};
export default NavBar;