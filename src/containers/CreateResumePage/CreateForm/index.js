import React, { Component } from 'react';
import './index.scss';
import FA from 'react-fontawesome';
import { getBase64 } from '../../../utils/base64';

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {}
    };

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handlePictureChange = this._handlePictureChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    alert('Resume created!');
    console.log('formValues', this.state.formValues);
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
        <button className="button button--small"><FA name="plus"/> Add Professional Experience</button>
        <div className="row CreateForm__sub-form">
            <input type="text" name="companyName" placeholder="Company Name" className="col col--50" onChange={this._handleInputChange} />
            <input type="text" name="role" placeholder="Role" className="col col--50" onChange={this._handleInputChange} />
            <input type="text" name="startDateExp" placeholder="Start Date" className="col col--25" onChange={this._handleInputChange} />
            <input type="text" name="endDateExp" placeholder="End Date" className="col col--25" onChange={this._handleInputChange} />
        </div>

        {/* lista de formações */}
        <button className="button button--small"><FA name="plus"/> Add Formation</button>
        <div className="row CreateForm__sub-form">
            <input type="text" name="institution" placeholder="Institution" className="col col--50" onChange={this._handleInputChange} />
            <input type="text" name="course" placeholder="Course" className="col col--50" onChange={this._handleInputChange} />
            <input type="text" name="startDateFor" placeholder="Start Date" className="col col--25" onChange={this._handleInputChange} />
            <input type="text" name="endDateFor" placeholder="End Date" className="col col--25" onChange={this._handleInputChange} />
            <label className="col col--25 row CreateForm__isConcludedLabel">
              Is Concluded:
              <select className="col col--25" name="isConcluded" required onChange={this._handleInputChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
        </div>


        <div className="col CreateForm__submit-button">
          <input type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

export default CreateForm;
