import React, { Component } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import {Bootstrap, Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="clearfix"><br /></div>
                <div className="clearfix"><br /></div>
                <div className="clearfix"><br /></div>
                <Grid fluid={true}>
                    <Row className="show-grid App container-fluid">
                        <Col xs={12} md={12}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Layout;