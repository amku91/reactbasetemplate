import React, { Component } from 'react';
//import Layout from './layout';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from './router';
import Header from './shared/header';
import Footer from './shared/footer';
import { Bootstrap, Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super();
        //this.state = {};
        //this.setNextQuestion = this.setNextQuestion.bind(this);
    }
    render() {
        return (
            <div id="AppMain" className="App">
                
                <Header />
                <div className="clearfix"><br /></div>
                <div className="clearfix"><br /></div>
                <div className="clearfix"><br /></div>
                <Grid fluid={true}>
                    <Row className="show-grid app-content container-fluid">
                        <Col xs={12} md={12}>
                            {AppRoutes}
                        </Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default App;