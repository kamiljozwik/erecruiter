import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import '../styles/Search.css';

class Search extends Component {
  // --- Constructor ---
  constructor(props){
    super(props);

    this.state = {city: ''};
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
  }

  // --- Render ---
  render(){
    return(
      <div className='Search-wrapper'>
        <form className='Search-form' onSubmit={this.handleSubmit.bind(this)}>
          <input className='form-input' type='text' placeholder='Type city name' value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}/>
          <button className='form-button' type='submit'><i className="fa fa-search"></i>SEARCH</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Search);
