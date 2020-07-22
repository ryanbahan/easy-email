import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageLoadingSpinner from '../../ImageLoadingSpinner/ImageLoadingSpinner';

const EmailHeader = ({
  bgColor,
  companyImage,
  companyName,
  companyFontColor,
  active,
  loading,
  logoActive,
  nameActive,
  link,
  }) => {
  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" height="105px" style={{color: companyFontColor, backgroundColor: bgColor}}>
      <tbody>
        <tr>
          {logoActive && <td width="75px">
            <div className="company-logo-container" style={{position: "relative", width: "min-content"}}>
              {loading === 'companyImage' && <ImageLoadingSpinner />}
              <a href={link}><img src={companyImage} alt="Company logo" border="0" style={{display: "block", width: "75px", marginLeft: "1rem"}} /></a>
            </div>
          </td>}
          { nameActive && <td style={{fontSize: "25px", paddingLeft: "1rem"}}>{companyName}</td>}
        </tr>
      </tbody>
    </table>

  ) : null
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
  companyFontColor: state.form.companyFontColor,
  bgColor: state.form.headerBGColor,
  active: state.visibility["Header"],
  loading: state.loading,
  logoActive: state.visibility["Company Logo"],
  nameActive: state.visibility["Company Name"],
  link: state.form["headerLink"]
})

EmailHeader.propTypes = {
  bgColor: PropTypes.string,
  companyImage: PropTypes.string,
  companyName: PropTypes.string,
  companyFontColor: PropTypes.string,
  active: PropTypes.bool,
}

export default connect(mapStateToProps)(EmailHeader);
