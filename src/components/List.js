import React, { Component } from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import '../styles/List.css';

class List extends Component {
  ListForecast() {
    var {forecast} = this.props;
    if (forecast) {
      return forecast.map((val, key) => {
        return <ListItem key={key} data={val} />;
      });
    }
  }
  // --- Render ---
  render(){
    return(
      <div className='List-wrapper'>
        {this.ListForecast()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    forecast: state.weather.next
  };
}

export default connect(mapStateToProps)(List);
