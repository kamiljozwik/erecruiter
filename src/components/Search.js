import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked');
  }

  // --- Render ---
  render(){
    return(
      <div className='Search-wrapper'>
        <form className='Search-form' onSubmit={this.handleSubmit.bind(this)}>
          <input className='form-input' type='text' placeholder='Type city name' />
          <button className='form-button' type='submit'><i className="fa fa-search"></i>SEARCH</button>
        </form>
      </div>
    );
  }
}

export default Search;
