import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import { mapFormItemsToProps } from '../../../utils';

const Footer = (props) => {
	const { footerAddress, footerFontColor, footerBGColor, active } = props;
	return active ? (
		<table
			border="0"
			cellSpacing="0"
			cellPadding="0"
			width="600px"
			style={{ color: footerFontColor, backgroundColor: footerBGColor }}
		>
			<tbody>
				<tr>
					<td style={{ padding: '0 16px' }} align="center">
						{Parser(footerAddress)}
					</td>
				</tr>
			</tbody>
		</table>
	) : null;
};

const mapStateToProps = (state, ownProps) => {
	const initialProps = mapFormItemsToProps(ownProps.formItems);

	const addedProps = {
		active: state.template.components.find((item) => item.id === ownProps.id).active,
		loading: state.loading
	};

	return { ...initialProps, ...addedProps };
};

Footer.propTypes = {
	address: PropTypes.string,
	fontColor: PropTypes.string,
	bgColor: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(Footer);
