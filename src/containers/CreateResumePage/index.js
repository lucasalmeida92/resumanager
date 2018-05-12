import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class CreateResumePage extends Component {
  render() {
    return (
      <div className="CreateResumePage">
        <Helmet>
          <title>Resumanager - Create Resume</title>
        </Helmet>
        <h1>Create Resume</h1>
      </div>
    );
  }
}

export default CreateResumePage;
