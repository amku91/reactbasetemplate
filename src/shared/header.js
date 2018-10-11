import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component{
    render(){
        return (
            <Navbar inverse collapseOnSelect fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Mausam</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/home">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/aboutus">
                        About Us
                    </NavItem>
                    <NavItem eventKey={2} href="/products">
                        Products
                    </NavItem>
                    <NavItem eventKey={2} href="/product/view/5">
                        Product View
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        Contact Us
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
}

export default Header;