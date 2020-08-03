import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import { mapFormItemsToProps } from '../../../utils';

const EmailContent = (props) => {
	const { cta, ctaButtonColor, ctaButtonFontColor, active, ctaButtonLink } = props;

	const buttonStyle = {
		margin: '1rem 0',
		padding: '0.75rem 1.25rem',
		border: 'solid 0.5px rgba(0,0,0,0.25)',
		borderRadius: '0.25rem',
		color: ctaButtonFontColor,
		backgroundColor: ctaButtonColor,
		cursor: 'pointer',
		fontWeight: '600',
		fontSize: '20px'
	};

	return active ? (
		<table border="0" cellSpacing="0" cellPadding="0" width="600px" style={{ backgroundColor: '#ffffff' }}>
			<tbody>
				<tr>
					<td style={{ padding: '1rem' }} align="center">
						<a href={ctaButtonLink}>
							<button style={buttonStyle}>{Parser(cta)}</button>
						</a>
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

	return { ...initialProps, addedProps };
};

EmailContent.propTypes = {
	cta: PropTypes.string,
	buttonColor: PropTypes.string,
	buttonFontColor: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(EmailContent);
