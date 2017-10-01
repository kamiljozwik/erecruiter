import React, { Component } from 'react';

class ListItem extends Component {
  // --- Render ---
  render(){
    var {data} = this.props;
    return(
      <div className='ListItem-wrapper'>
        <div className='item-frame'>
          <span className='item-date'>{data.dt_txt.split(' ')[1].slice(0,5)} <span className='utc'>UTC</span></span>
          <span className='item-temp'>{Math.round(data.main.temp)} &#8451;</span>
          <img className='item-img' src={`img/${data.weather[0].main}.png`} alt='' />
        </div>
      </div>
    );
  }
}

export default ListItem;
