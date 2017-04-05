import React from 'react';

const ItemView = (props) => {
  return (
    <li>
      <a href={props.link}>{props.title}</a>
    </li>
  );
};

export default ItemView;