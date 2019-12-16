import React from 'react';

import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
  return (
    <NavLink activeStyle={{color: "#ffd833", fontWeight: "bold"}} {...props} />
  );
}

export default LinkWrapper;