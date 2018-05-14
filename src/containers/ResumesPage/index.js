import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import request from '../../utils/request';
import Resume from './Resume';
import Loader from '../../components/Loader';

class ResumesPage extends Component {
  constructor() {
    super();

    this.state = {
      resumes: [],
    };
  }

  componentDidMount() {
    const resumesUrl = '/resumes.json';
    request(resumesUrl)
      .then(json => {
        let resumes = json.map(resume => {
          return(
            <Resume key={resume._id} resume={resume} />
          )
        });
        setTimeout(() => {
          this.setState({resumes: resumes});
        }, 2000);
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ResumesPage">
        <Helmet>
          <title>Resumanager - Resumes</title>
        </Helmet>
        <h1>Resumes</h1>
        <div className="ResumesPage__resumes">
          {
            this.state.resumes.length
              ? this.state.resumes
              : <Loader />
          }
        </div>
      </div>
    );
  }
}

export default ResumesPage;
