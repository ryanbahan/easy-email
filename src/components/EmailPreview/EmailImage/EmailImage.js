import React from 'react';
import PropTypes from 'prop-types';
import ImageLoadingSpinner from '../../ImageLoadingSpinner/ImageLoadingSpinner';
import { connect } from 'react-redux';
import { mapFormItemsToProps } from '../../../utils';

const EmailImage = ({ mainImage, active, loading }) => {
	return active ? (
		<div className="placeholder-image-container" style={{ position: 'relative' }}>
			{loading === 'mainImage' && <ImageLoadingSpinner />}
			<img src={mainImage} alt="Main content" style={{ width: '600px', display: 'block' }} />
		</div>
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

EmailImage.propTypes = {
	mainImage: PropTypes.string,
	mainImageTagline: PropTypes.string,
	mainImageButtonCopy: PropTypes.string,
	mainImageButtonColor: PropTypes.string,
	mainImageButtonFontColor: PropTypes.string,
	active: PropTypes.bool
};

export default connect(mapStateToProps)(EmailImage);
