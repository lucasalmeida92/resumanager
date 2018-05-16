import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';
import CreateForm from './CreateForm';

class CreateResumePage extends Component {
  render() {
    return (
      <div className="CreateResumePage">
        <Helmet>
          <title>Resumanager - Create Resume</title>
        </Helmet>
        <h1>Create Resume</h1>
        <CreateForm />
      </div>
    );
  }
}

export default CreateResumePage;
