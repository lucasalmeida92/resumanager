import React, { Component } from 'react';
import './index.scss';

class FormationFieldset extends Component {
  constructor(props) {
    super(props);

    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.props.onFormationChange(name, value, this.props.index);
  }

  render() {
    return (
      <fieldset className="FormationFieldset" data-index-number={this.props.index}>
        <div className="row">
          <input type="text" name="institution" placeholder="Institution" className="col col--50" onChange={this._handleInputChange} />
          <input type="text" name="course" placeholder="Course" className="col col--50" onChange={this._handleInputChange} />
          <input type="text" name="startDateFor" placeholder="Start Date" className="col col--25" onChange={this._handleInputChange} />
          <input type="text" name="endDateFor" placeholder="End Date" className="col col--25" onChange={this._handleInputChange} />
          <label className="col col--25 row FormationFieldset__isConcludedLabel">
            Is Concluded:
            <select className="col col--25" name="isConcluded" required onChange={this._handleInputChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
      </fieldset>
    );
  }
}

export default FormationFieldset;
