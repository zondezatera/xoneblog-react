import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './style.css';

class SideBarView extends Component {
  render() {
    return (
      <div id="sidebar-view">
        <div className="item-view">
          <h2>
            Blognone on Facebook
          </h2>
          <div>
            <Iframe 
              url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fblognone%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1960475330840719" 
              width="310" 
              height="500" 
              style="border:none;overflow:hidden" 
              scrolling="no" 
              frameborder="0" 
              allowTransparency="true"
               />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarView;