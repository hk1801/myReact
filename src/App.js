import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// component
import Header   from './components/headercomponents/header';
import Footer   from './components/footercomponent/footer';
import Homepage from './components/pages/homePage.js';
import Products from './components/pages/Products.js';
import Contact from './components/pages/Contact.js';

import './App.css';

class App extends Component {
  render() {
    return (
     
      <Router>
      <div className="App">
        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Contact' component={Contact} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
