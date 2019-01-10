import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     
<header>
    	<nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
            <ul className="nav navbar-nav">
              <li>
    			       <Link to="/"> Home</Link>
    			       </li>
              <li>
    			       <Link to="/Products">	Products </Link>
    			       </li>
                 <li>
                 <Link to="/Contact">  Contact </Link>
                 </li>			 
            </ul>
        </div>
      </nav>
</header>
    );
  }
}

export default Header;
