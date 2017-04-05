import React, { Component } from 'react';
import ConntentArticle from '../../components/content/article/index';
import ConntentSideBar from '../../components/content/sidebar/index';
import './style.css';

class ContentContainer extends Component {
  render() {
    return (
      <div id="content">
        <ConntentArticle />
        <ConntentSideBar />
      </div>
    );
  }
}

export default ContentContainer;