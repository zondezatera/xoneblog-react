import React, { Component } from 'react';
import ItemListView from './itemlist';
import './style.css';

class HeaderNavBar extends Component {
  render() {
    return (
      <div id="navitem-list-view">
        <ItemListView />
      </div>
    );
  }
}

export default HeaderNavBar;