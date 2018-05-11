import React, { Component } from 'react';
import Menu from '../Menu';
import './index.scss';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header__title">Resumanager</h1>
          <Menu />
        </header>
    );
  }
}

export default Header;
