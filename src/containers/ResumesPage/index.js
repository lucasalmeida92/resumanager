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

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    const resumesUrl = '/resumes.json';
    request(resumesUrl)
      .then(json => {
        let resumes = [...json]
          .map(resume => {
            resume.score = this._getRandomInt(0,100);
            return resume;
          })
          .sort((a,b) => b.score - a.score)
          .map((resume, index) => {
            return(
              <Resume key={index} resume={resume} />
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
