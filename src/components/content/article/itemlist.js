import React, { Component } from 'react';
import ItemView from './item';

class ItemListView extends Component {
  renderUserData(userId) {
   return this.props.userProfile.find((data) => {return data.id === userId })
  }

  renderRow() {
    return this.props.contentArticle.map((rowData, index) => {
      return (
        <ItemView
          key={index}
          title={rowData.title}
          thumbnails="https://www.blognone.com/sites/default/files/styles/thumbnail/public/news-thumbnails/Sports_Logo_-_Fnatic.png?itok=zDMACAjJ"
          description={rowData.body}
          userprofile={this.renderUserData.call(this, rowData.userId)}
        />
      );
    })
  }

  render() {
    return (
      <div className="item-list-view">
        {this.renderRow.call(this)}
      </div>
    );
  }
}

export default ItemListView;