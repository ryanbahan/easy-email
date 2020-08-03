import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse, { domToReact } from 'html-react-parser';
import { mapFormItemsToProps } from '../../../utils';

const EmailImageTagline = ({
	mainImageTaglineBG,
	mainImageTagline,
	mainImageButtonCopy,
	mainImageButtonColor,
	mainImageFontColor,
	mainImageButtonFontColor,
	active,
	mainImageTaglineActive,
	mainImageButtonCopyActive,
	mainImageButtonLink
}) => {
	const buttonStyle = {
		backgroundColor: mainImageButtonColor,
		border: 'solid 0.5px rgba(0,0,0,0.25)',
		padding: '0.5rem 1rem',
		borderRadius: '0.25rem',
		cursor: 'pointer',
		height: 'min-content',
		fontWeight: '600',
		color: mainImageButtonFontColor,
		verticalAlign: 'middle',
		float: 'right',
		fontSize: '20px'
	};

	return active ? (
		<table
			border="0"
			cellSpacing="0"
			cellPadding="0"
			style={{
				display: 'block',
				color: mainImageFontColor,
				backgroundColor: mainImageTaglineBG,
				tableLayout: 'fixed',
				width: '600px',
				paddingTop: '1rem'
			}}
		>
			<tbody>
				<tr>
					{mainImageTaglineActive && (
						<td width="400">
							{parse(mainImageTagline, {
								replace: (domNode) => {
									if (domNode.name) {
										return React.createElement(
											domNode.name,
											{ style: { paddingLeft: '1rem', fontSize: '26px' } },
											domToReact(domNode.children, domNode.options)
										);
									}
								}
							})}
						</td>
					)}
					{mainImageButtonCopyActive && (
						<td style={{ padding: ' 1rem' }}>
							<a href={mainImageButtonLink}>
								<button style={buttonStyle}>{mainImageButtonCopy}</button>
							</a>
						</td>
					)}
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

EmailImageTagline.propTypes = {
	mainImageTaglineBG: PropTypes.string,
	mainImageTagline: PropTypes.string,
	mainImageButtonCopy: PropTypes.string,
	mainImageButtonColor: PropTypes.string,
	mainImageFontColor: PropTypes.string,
	mainImageButtonFontColor: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(EmailImageTagline);
