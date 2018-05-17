import React, { Component } from 'react';
import './index.scss';

class ExperienceFieldset extends Component {
  constructor(props) {
    super(props);

    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.props.onExperienceChange(name, value, this.props.index);
  }

  render() {
    return (
      <fieldset className="ExperienceFieldset" data-index-number={this.props.index}>
        <div className="row">
          <input type="text" name="companyName" placeholder="Company Name" className="col col--50" onChange={this._handleInputChange} />
          <input type="text" name="role" placeholder="Role" className="col col--50" onChange={this._handleInputChange} />
          <input type="text" name="startDateExp" placeholder="Start Date" className="col col--25" onChange={this._handleInputChange} />
          <input type="text" name="endDateExp" placeholder="End Date" className="col col--25" onChange={this._handleInputChange} />
        </div>
      </fieldset>
    );
  }
}

export default ExperienceFieldset;
