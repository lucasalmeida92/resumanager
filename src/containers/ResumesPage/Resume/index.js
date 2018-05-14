import React, { Component } from 'react';
import FA from 'react-fontawesome';
import './index.scss';
import moment from 'moment';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoreInfoOpen: false,
    }
    this._toggleMoreInfo = this._toggleMoreInfo.bind(this);
  }

  _toggleMoreInfo(e) {
    e.preventDefault();
    console.log(this.state.isMoreInfoOpen);
    this.setState({
      isMoreInfoOpen: !this.state.isMoreInfoOpen
    })
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

        <span className="Resume__score">{resume.score}</span>

        <div className="Resume__summary">
          <div className="Resume__profile">
            <img src={resume.picture} alt={resume.name} />
            {/* <img src="http://i30.tinypic.com/15for9t.jpg" alt={resume.name} /> */}
            <span className={`Resume__gender Resume__gender--${resume.gender}`}>{genderLetter}</span>
            <span className="Resume__age">{age} years</span>
          </div>

          <div className="Resume__basic-info">
            <p className="Resume__created-at">
              <small>Created at: </small>
              {createdAt}
            </p>
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

        {/* TO DO: Make a more info component */}
        <div className={`Resume__more-info ${this.state.isMoreInfoOpen && 'Resume__more-info--open'}`}>
          <button className="Resume__more-button" onClick={this._toggleMoreInfo}>see more <FA name="plus" /></button>
          <h3 className="Resume__session-title">Professional Experiences</h3>
          <div className="Resume__session-item">
            <p className="Resume__info">minim</p>
            <p className="Resume__info"><FA name="user-circle" /> minim</p>
            <p className="Resume__info"><FA name="calendar" /> Feb/2017 - Oct/2018</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Resume;
