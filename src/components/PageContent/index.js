import React, { Component } from 'react';
import './index.scss';

class PageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PageContent">
        <div className="PageContent__wrapper">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default PageContent;
