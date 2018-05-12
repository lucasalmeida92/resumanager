import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ResumesPage extends Component {
  render() {
    return (
      <div className="ResumesPage">
        <Helmet>
          <title>Resumanager - Resumes</title>
        </Helmet>
        <h1>Resumes</h1>
      </div>
    );
  }
}

export default ResumesPage;
