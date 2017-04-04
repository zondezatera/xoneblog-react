import React, { Component } from 'react';
import Logo from './logo';
import './style.css';

class HeaderTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="header-top">
        <Logo {...this.props} />
      </div>
    );
  }
}

export default HeaderTop;