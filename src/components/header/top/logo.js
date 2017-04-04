import React, { PropTypes } from 'react';

const HeaderLogo = props => {
  return (
    <div className="logo-container">
      <img src={props.dataSource} />
    </div>
  );
};

HeaderLogo.propTypes = {
  dataSource: PropTypes.string
};

export default HeaderLogo;