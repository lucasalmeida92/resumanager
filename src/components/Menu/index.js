import React, { Component } from 'react';
import './index.scss';

class Menu extends Component {
  render() {
    return (
        <ul className="Menu">
          <li className="Menu__item">
            <a href="#" title="Register">Register</a>
          </li>
          <li className="Menu__item">
            <a href="#" title="Show Resumes">Show Resumes</a>
          </li>
        </ul>
    );
  }
}

export default Menu;
