import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getFormItems = () => {
    return this.props.formItems.map(item =>
      ( <div className="form-item">
          <input type="checkbox" defaultChecked/>
          <p className="form-item-title" key={item}>{item}</p>
        </div>
      )
    );
  }

  render() {
    return (
      <div className={this.props.dropdown ? "dropdown" : "hidden dropdown"}>
        {this.getFormItems()}
      </div>
    )
  }
}