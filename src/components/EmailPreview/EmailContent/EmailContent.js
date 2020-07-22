import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const EmailContent = ({ content, active, contentActive }) => {

  return active ? (
    <table border="0" cellSpacing="0" cellPadding="0" width="600px" style={{backgroundColor: "#ffffff"}}>
      <tbody>
        <tr>
            {contentActive && <td style={{padding: "0.5rem 1rem", fontSize: "20px"}}>{Parser(content)}</td>}
        </tr>
      </tbody>
    </table>
  ) : null
}

const mapStateToProps = state => ({
  content: state.form.content,
  active: state.visibility["Main Content"],
  contentActive: state.visibility["Content Block Text"],
})

EmailContent.propTypes = {
  content: PropTypes.string,
  active: PropTypes.bool,
};

export default connect(mapStateToProps)(EmailContent);
