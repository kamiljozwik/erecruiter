import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/Actual.css';

class Actual extends Component {
  // --- Render ---
  render(){
    var {actual} = this.props.weather;
    if (actual) {
      return(
        <div className='Actual-wrapper'>
          <div className='actual-frame'>
            <p className='City-country'>{actual.name}, {this.props.weather.country}</p>
            <p className='Temperature'> {Math.round(actual.main.temp)} &#8451;</p>
            <p className='Humidity'>Humidity: {actual.main.humidity}%</p>
            <p className='Pressure'>Pressure: {actual.main.pressure} hPa</p>
            <img src={`img/${actual.weather[0].main}.png`} alt='weather' />
          </div>
        </div>
      );
    } else if (this.props.weather.city === 'notFound') {
      return <div className='not-found'> Unable to find this city - please try again</div>;
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(Actual);
