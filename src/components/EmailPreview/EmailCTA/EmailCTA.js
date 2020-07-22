import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailContent = ({ cta, buttonColor, buttonFontColor, active, buttonActive, link }) => {
  const buttonStyle = {
    margin: "1rem 0",
    padding: "0.75rem 1.25rem",
    border: "solid 0.5px rgba(0,0,0,0.25)",
    borderRadius: "0.25rem",
    color: buttonFontColor,
    backgroundColor: buttonColor,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "20px",
  }

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" style={{backgroundColor: "#ffffff"}}>
      <tbody>
        <tr>
          {buttonActive && <td style={{padding: "1rem"}} align="center"><a href={link}><button style={buttonStyle}>{Parser(cta)}</button></a></td>}
        </tr>
      </tbody>
    </table>
  ) : null
}

const mapStateToProps = state => ({
  cta: state.form.cta,
  buttonColor: state.form.ctaButtonColor,
  buttonFontColor: state.form.ctaButtonFontColor,
  active: state.visibility["Main Content"],
  buttonActive: state.visibility["CTA Button Text"],
  link: state.form["ctaButtonLink"]
})

EmailContent.propTypes = {
  cta: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailContent);
