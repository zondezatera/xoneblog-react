import React, { Component } from 'react';

class ItemView extends Component {
  constructor(props) {
    super(props);
  }

  renderRowTitle() {
    return (
      <div className="content-title">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
  renderRowContent() {
    return (
      <div className="content-view">
        <div className="meta">
          <span>{`By: ${this.props.userprofile.name}`}</span>
        </div>
        <div className="view-thumbnails">
          <img src={this.props.thumbnails} />
        </div>
        <div className="view-description">
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
  renderRowFooter() {
    return (
      <div className="content-readmore">
        <a href="#">Read more</a>
      </div>
    );
  }

  render() {
    return (
      <div className="item-content">
        {this.renderRowTitle.call(this)}
        {this.renderRowContent.call(this)}
        {this.renderRowFooter.call(this)}
      </div>
    );
  }
}

export default ItemView;