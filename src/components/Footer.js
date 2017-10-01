import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  // --- Render ---
  render(){
    return(
      <div className='Footer-wrapper'>
        <div className='footer-frame'>
          <p className='author'>Author: Kamil Jozwik</p>
          <p className='email'>email: kamiljozwikpl@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Footer;
