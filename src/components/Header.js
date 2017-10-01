import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  // --- Render ---
  render(){
    return(
      <div className='Header-wrapper'>
        <div className='Header-navbar'>
          <div className='Proj-title'>
            Weather List App
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
