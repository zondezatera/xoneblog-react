import React, { Component } from 'react';
import ItemListView from './itemlist';
import './style.css';
class ArticleListView extends Component {
  render() {
    return (
      <div id="articleitem-list-view">
        <ItemListView {...this.props} />
      </div>
    );
  }
}

export default ArticleListView;