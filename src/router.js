import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Product from './components/product';
import ProductView from './components/productview';
import App from './App';


const AppRoutes = (
    <div>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route path="/home" component={Home} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/products" component={Product} />
        <Route path="/product/view/:id" component={ProductView} />
    </div>
);

export default AppRoutes;

