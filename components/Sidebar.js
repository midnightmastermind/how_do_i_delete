import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu className="mobile-menu">
      <a className="menu-item">
        Schedule
      </a>
      <a className="menu-item">
        About Me
      </a>
      <a className="menu-item">
        Contact
      </a>
      <a className="menu-item">
        Preview
      </a>
      <a className="menu-item">
        Watch Video
      </a>
    </Menu>
  );
};
