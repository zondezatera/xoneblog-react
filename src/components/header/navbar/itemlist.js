import React, { Component } from 'react';
import ItemView from './item';

class ItemListView extends Component {
  renderRow() {
    return this.props.staticlink.map((rowdata) => {
      return (
       <ItemView 
        title={rowdata.title}
        link={rowdata.link}
        /> 
      )
    })
  }

  render() {
    return (
      <div className="item-list-view">
        <ul>
          {this.renderRow.call(this)}
        </ul>
      </div>
    );
  }
}

export default ItemListView;