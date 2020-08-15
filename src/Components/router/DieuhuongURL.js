import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from '../home/Home';
import AppContainer from '../appContainer/AppContainer';
import AboutProduct from '../aboutProduct/AboutProduct';
import InformationBuyProduct from '../buyProduct/InformationBuyProduct'

export default class DieuhuongURL extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={AppContainer}/>                                
                <Route exact path="/about" component={AboutProduct}/>                
                <Route exact path="/contact" component={InformationBuyProduct}/>
                </Switch>
            </Router>
        )
    }
}
