import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Search from './Search';
import Actual from './Actual';
import List from './List';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Actual />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
