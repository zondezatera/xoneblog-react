import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticleContent } from './actions/article';
import { fetchUserData } from './actions/user';
import logo from '../public/logo-white-2x.png';
import Header from './containers/header';
import Content from './containers/content';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchArticleContent();
    this.props.fetchUserData();
  }
  render() {
    return (
      <div className="App">
        <Header 
          dataSource={logo}
        />
        <Content {...this.props} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    contentArticle: state.contentArticle,
    userProfile: state.userProfile,
  }),
  {
    fetchArticleContent,
    fetchUserData
  }
)(App);
