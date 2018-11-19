import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import MainBody from'./MainBody.js'
class App extends Component {
  render() {
    return (<div className="creditCard">
      <Header />
      <MainBody />
    </div>   
    );
  }
}

export default App;
