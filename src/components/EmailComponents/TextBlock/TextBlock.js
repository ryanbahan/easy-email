import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import { mapFormItemsToProps } from '../../../utils';

const TextBlock = (props) => {
	const { content, active } = props;

	return active ? (
		<table border="0" cellSpacing="0" cellPadding="0" width="600px" style={{ backgroundColor: '#ffffff' }}>
			<tbody>
				<tr>
					<td style={{ padding: '0.5rem 1rem', fontSize: '20px' }}>{Parser(content)}</td>
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

TextBlock.propTypes = {
	content: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(TextBlock);
