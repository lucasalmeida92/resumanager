import React, { Component } from 'react';
import FA from 'react-fontawesome';
import './index.scss';
import moment from 'moment';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resume = this.props.resume;
    const birthDate = moment(resume.birthDate.replace(' ',''), moment.ISO_8601).format('DD/MM/YYYY');
    const age = parseInt(moment().format('YYYY')) - parseInt(moment(birthDate, 'DD/MM/YYYY').format('YYYY'));
    const createdAt = moment(resume.createdAt.replace(' ',''), moment.ISO_8601).format('DD/MM/YYYY');
    const genderLetter = resume.gender === 'male' ? 'M': 'F';
    let tags = resume.tags.map((tag, index) => {
      return (
        <span key={index} className="Resume__tag">{tag}</span>
      )
    });

    return (
      <div className="Resume">

        <div className="Resume__summary">

          <div className="Resume__profile">
            <img src={resume.picture} alt={resume.name} />
            {/* <img src="http://i30.tinypic.com/15for9t.jpg" alt={resume.name} /> */}
            <span className={`Resume__gender Resume__gender--${resume.gender}`}>{genderLetter}</span>
            <span className="Resume__age">{age} anos</span>
          </div>

          <div className="Resume__basic-info">
            <p className="Resume__created-at">{createdAt}</p>
            <h2 className="Resume__name">{resume.name}</h2>
            <div className="Resume__tags">
              {tags}
            </div>
            <p className="Resume__info">
              <FA name="map-marker" />
              {resume.address}
            </p>
            <p className="Resume__info">
              <FA name="envelope" />
              {resume.email}
            </p>
            <p className="Resume__info">
              <FA name="phone" />
              {resume.phone}
            </p>
          </div>
        </div>

        <div className="Resume__more-info">
        </div>

      </div>
    );
  }
}

export default Resume;
