import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageLoadingSpinner from '../../ImageLoadingSpinner/ImageLoadingSpinner';
import { mapFormItemsToProps } from '../../../utils';

const EmailHeader = ({
	headerBGColor,
	companyImage,
	companyImageActive,
	companyName,
	companyNameActive,
	companyFontColor,
	active,
	loading,
	headerLink
}) => {
	return active ? (
		<table
			border="0"
			cellSpacing="0"
			cellPadding="0"
			width="600px"
			height="105px"
			style={{ color: companyFontColor, backgroundColor: headerBGColor }}
		>
			<tbody>
				<tr>
					{companyImageActive && (
						<td width="75px">
							<div
								className="company-logo-container"
								style={{ position: 'relative', width: 'min-content' }}
							>
								{loading === 'companyImage' && <ImageLoadingSpinner />}
								<a href={headerLink}>
									<img
										src={companyImage}
										alt="Company logo"
										border="0"
										style={{ display: 'block', width: '75px', marginLeft: '1rem' }}
									/>
								</a>
							</div>
						</td>
					)}
					{companyNameActive && <td style={{ fontSize: '25px', paddingLeft: '1rem' }}>{companyName}</td>}
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

EmailHeader.propTypes = {
	bgColor: PropTypes.string,
	companyImage: PropTypes.string,
	companyName: PropTypes.string,
	companyFontColor: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(EmailHeader);
