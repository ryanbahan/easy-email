import React, { useState } from 'react';
import './DropdownContainer.css';
import Dropdown from '../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../../utils/Actions';
import PropTypes from 'prop-types';

const DropdownContainer = ({ toggleVisibility, title, active, formItems }) => {
  const [state, setState] = useState({ dropdown: false })

  const toggleChecked = (e) => {
    toggleVisibility({[title]: !active})
  }

  const toggleDropdown = () => {
    setState({dropdown: !state.dropdown});
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-container">
        <div className="title-wrapper">
          <input type="checkbox" className="visibility-toggle" onClick={() => toggleChecked()} defaultChecked={active} />
          <h4 style={{fontWeight: "500", fontSize: "1.1rem", padding: "0", margin: "0"}}>{title}</h4>
        </div>
        <p className="dropdown-toggle" onClick={() => toggleDropdown()}>+</p>
      </div>
      <Dropdown
        dropdown={state.dropdown}
        formItems={formItems}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: (title, bool) => dispatch(toggleVisibility(title, bool))
})

const mapStateToProps = (state, ownProps) => ({
  active: state.visibility[ownProps.title]
})

DropdownContainer.propTypes = {
  formItems: PropTypes.array,
  title: PropTypes.string,
  active: PropTypes.bool,
  toggleVisibility: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
