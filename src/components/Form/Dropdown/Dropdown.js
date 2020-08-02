import React from 'react';
import './Dropdown.css';
import Colorpicker from '../Colorpicker/ColorPicker';
import FileUploader from '../FileUploader/FileUploader';
import TextField from '../TextField/TextField';
import ButtonCopyField from '../ButtonCopyField/ButtonCopyField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../../redux/actions';

const Dropdown = ({ dropdownActive, formItems, active, toggleVisibility }) => {

  const getFormComponent = (item) => {
    switch (item.component) {
      case "ButtonCopyField":
        return <ButtonCopyField store={item.store} constraints={item.constraints} />
      case "Colorpicker":
        return <Colorpicker store={item.store} constraints={item.constraints} />
      case "TextField":
        return <TextField store={item.store} constraints={item.constraints} />
      case "FileUploader":
        return <FileUploader store={item.store} constraints={item.constraints} />
      default:
        return null;
    }
  }

  const toggleChecked = (item) => {
    toggleVisibility({[item]: !active[item]})
  }

  const getFormItems = () => {
    return formItems.map(item =>
      ( <div className="form-item" key={item.title}>
          <div className="form-title-wrapper">
            {item.checkbox && <input type="checkbox" onClick={() => toggleChecked(item.title)} defaultChecked={active} style={{cursor: "pointer"}}/>}
            {item.checkbox && <p style={{fontSize: "0.85rem", marginLeft: "0.25rem"}}>{item.title}</p>}
            {!item.checkbox && <p style={{fontSize: "0.85rem", marginLeft: "1.4rem"}}>{item.title}</p>}
          </div>
          {getFormComponent(item)}
        </div>
      )
    );
  }

  return (
    <div className={dropdown ? "dropdown" : "hidden dropdown"}>
      {getFormItems()}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: (title, bool) => dispatch(toggleVisibility(title, bool))
})

const mapStateToProps = (state, ownProps) => ({
  active: state.visibility,
})

Dropdown.propTypes = {
  dropdown: PropTypes.bool,
  formItems: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
