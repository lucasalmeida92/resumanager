import React, { Component } from 'react';
import loader from './loader.svg';
import './index.scss';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <img src={loader} />
      </div>
    );
  }
}

export default Loader;
