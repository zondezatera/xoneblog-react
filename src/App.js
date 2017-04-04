import React, { Component } from 'react';
import logo from '../public/logo-white-2x.png';
import './App.css';
import Header from './containers/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          dataSource={logo}
        />
        {/*<Content />*/}
      </div>
    );
  }
}

export default App;
