import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailFooter = ({ address, fontColor, bgColor, active }) => {

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" style={{color: fontColor, backgroundColor: bgColor}}>
      <tbody>
        <tr>
          <td style={{padding: "0 16px"}} align="center">{Parser(address)}</td>
        </tr>
      </tbody>
    </table>
  ) : null
}

const mapStateToProps = state => ({
  address: state.form.footerAddress,
  bgColor: state.form.footerBGColor,
  fontColor: state.form.footerFontColor,
  active: state.visibility["Footer"],
});

EmailFooter.propTypes = {
  address: PropTypes.string,
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailFooter);
