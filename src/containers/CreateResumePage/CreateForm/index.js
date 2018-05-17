import React, { Component } from 'react';
import './index.scss';
import FA from 'react-fontawesome';
import { getBase64 } from '../../../utils/base64';
import ExperienceFieldset from './ExperienceFieldset';
import FormationFieldset from './FormationFieldset';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        gender: 'male'
      },
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handlePictureChange = this._handlePictureChange.bind(this);
    this._addExperienceFieldset = this._addExperienceFieldset.bind(this);
    this._addFormationFieldset = this._addFormationFieldset.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._changeExperience = this._changeExperience.bind(this);
    this._changeFormation = this._changeFormation.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    alert('Resume created!');
    console.log('formValues', this.state.formValues);
    console.log('experiences', this.state.experiences);
    console.log('formations', this.state.formations);

    let newResume = {...this.state.formValues};
    newResume.experiences = this.state.experiences ? this.state.experiences.slice() : null;
    newResume.formations = this.state.formations ? this.state.formations.slice() : null;

    let createdResumes = JSON.parse(localStorage.getItem('createdResumes'));
    createdResumes
      ? createdResumes = createdResumes.concat([newResume])
      : createdResumes = [newResume];
    localStorage.setItem('createdResumes', JSON.stringify(createdResumes));
  }

  _handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if(name === 'tags') {
      value = value
        .replace(/, /g, ',')
        .replace(/ ,/g, ',')
        .split(',')
        .filter(tag => tag.length);
    }

    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    });
  }

  _handlePictureChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    this.setState({
      fileName: file.name
    });
    getBase64(file).then(base64 => {
      this.setState({
        selectedPicture: base64
      });
    }).catch(error => {
      console.error(error);
    });
  }

  _addExperienceFieldset(e) {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences
        ? this.state.experiences.concat([{}])
        : [{}]
    });
  }

  _addFormationFieldset(e) {
    e.preventDefault();
    this.setState({
      formations: this.state.formations
        ? this.state.formations.concat([{}])
        : [{}]
    });
  }

  _changeExperience(name, value, index) {
    let newExperiences = this.state.experiences ? this.state.experiences.slice() : [];
    newExperiences[index][name] = value;
    this.setState({
      experiences: newExperiences
    });
  }

  _changeFormation(name, value, index) {
    let newFormations = this.state.formations ? this.state.formations.slice() : [];
    newFormations[index][name] = value;
    this.setState({
      formations: newFormations
    });
  }

  render() {
    return (
      <form className="box CreateForm" onSubmit={this._handleSubmit}>

        {this.state.selectedPicture &&
          <div className="CreateForm__selectedPicture">
            <img src={this.state.selectedPicture} alt="Candidate Picture" />
          </div>
        }
        <div className="row">
          <label className="col col--50">
            Name:
            <input type="text" name="name" required onChange={this._handleInputChange} />
          </label>
          <label className="col col--50 CreateForm__upload-label">
            Picture:
            <input className="CreateForm__upload-input" name="picture" type="file" accept="image/*" onChange={this._handlePictureChange} />
            <span className="CreateForm__upload-button">
              <FA name="upload" />
              {
                this.state.fileName
                  ? this.state.fileName
                  : 'Choose file...'
              }
            </span>
          </label>
        </div>

        <div className="row">
          <label className="col col--50">
            Birthdate:
            <input type="text" name="birthDate" required onChange={this._handleInputChange} />
          </label>
          <label className="col col--50">
            Gender:
            <select name="gender" required onChange={this._handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        <div className="row">
          <label className="col col--50">
            Email:
            <input type="email" name="email" required onChange={this._handleInputChange} />
          </label>
          <label className="col col--50">
            Phone:
            <input type="tel" name="phone" onChange={this._handleInputChange} />
          </label>
        </div>

        <div className="row">
          <label className="col col--50">
            Address:
            <input type="text" name="address" required onChange={this._handleInputChange} />
          </label>
          <label className="col col--50">
            Position(latitude,longitude):
            <div className="row">
              <input type="text" name="latitude" onChange={this._handleInputChange} className="col col--50" />
              <input type="text" name="longitude" onChange={this._handleInputChange} className="col col--50" />
            </div>
          </label>
        </div>

        {/* tags */}
        <label className="col">
          Tags(comma separated):
          <input type="text" name="tags" onChange={this._handleInputChange} />
        </label>


        {/* lista de experiência profissional */}
        <div>
          <button className="button button--small" onClick={this._addExperienceFieldset}><FA name="plus"/> Add Professional Experience</button>
          {this.state.experiences &&
              this.state.experiences.map((exp, index) => (
                <ExperienceFieldset key={index} index={index} onExperienceChange={this._changeExperience} />
              ))
          }
        </div>

        {/* lista de formações */}
        <div>
          <button className="button button--small" onClick={this._addFormationFieldset}><FA name="plus"/> Add Formation</button>
          {this.state.formations &&
              this.state.formations.map((form, index) => (
                <FormationFieldset key={index} index={index} onFormationChange={this._changeFormation} />
              ))
          }
        </div>


        <div className="col CreateForm__submit-button">
          <input type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

export default CreateForm;
