import React, { Component } from 'react';
import ItemListView from './itemlist';
import { STATIC_LINK } from '../../../actions/constants';
import './style.css';

class HeaderNavBar extends Component {
  render() {
    return (
      <div id="navitem-list-view">
        <ItemListView staticlink={STATIC_LINK} />
      </div>
    );
  }
}

export default HeaderNavBar;