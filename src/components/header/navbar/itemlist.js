import React, { Component } from 'react';
import ItemView from './item';

class ItemListView extends Component {
  renderRow() {
    const mockupLink = [
      { title:'Features', link:'https://www.blognone.com/feature' },
      { title:'Interview', link:'https://www.blognone.com//topics/interview' },
      { title:'Forum', link:'https://www.blognone.com/forum' },
      { title:'Jobs', link:'https://www.blognone.com/forums/blognone-jobs' },
      { title:'Workplace', link:'https://www.blognone.com//topics/blognone-workplace' },
      { title:'Company Profile', link:'https://www.blognone.com/company-profile' },
      { title:'Search', link:'https://www.blognone.com/node/22962' }
    ];
    return mockupLink.map((rowdata) => {
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