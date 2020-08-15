import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Headers from './header/Headers';
import Footer from './footer/Footer';
import Index from './admin/Index'
import DieuHuongURL from './router/DieuhuongURL';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Headers />
        <DieuHuongURL />
        <Index/>
        <Footer />
      </div>
    );
  }
}

export default App;