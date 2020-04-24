import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EmailHeader = ({
  bgColor,
  companyImage,
  companyName,
  companyFontColor,
  active }) => {

  return active ? (
      <header style={{backgroundColor: bgColor}}>
        <img src={companyImage} alt="Company logo" style={{width: "50px", display: "inline", verticalAlign: "middle", padding: "2.5% 2.5% 2.5% 0"}}/>
        <p style={{color: companyFontColor, display: "inline", verticalAlign: "middle"}}>{companyName}</p>
      </header>
  ) : null
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
  companyFontColor: state.form.companyFontColor,
  bgColor: state.form.headerBGColor,
  active: state.visibility["Header"],
})

EmailHeader.propTypes = {
  bgColor: PropTypes.string,
  companyImage: PropTypes.string,
  companyName: PropTypes.string,
  companyFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailHeader);
