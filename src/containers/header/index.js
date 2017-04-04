import React, { Component } from 'react';
import HeaderTop from '../../components/header/top';
import HeaderNavBar from '../../components/header/navbar';
import './style.css' ;

class HeaderContainer extends Component {
  render() {
    return (
      <div id="header">
        <HeaderTop {...this.props} />
        <HeaderNavBar />
      </div>
    );
  }
}

export default HeaderContainer;