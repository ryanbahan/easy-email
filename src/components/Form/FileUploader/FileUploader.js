import React from 'react';
import './FileUploader.css';
import { updateItem, isLoading } from '../../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FileUploader = (props) => {
	const { isLoading, store, update, id, componentID } = props;
	const getFile = (e) => {
		const file = e.target.files[0];

		if (file) {
			// isLoading(store);
			const formData = new FormData();
			formData.append('myFile', file);

			fetch('https://limitless-citadel-48645.herokuapp.com/saveImage', {
				method: 'POST',
				body: formData
			})
				.then((res) => res.json())
				.then((data) => {
					update({
						componentID,
						itemID: id,
						content: `https://limitless-citadel-48645.herokuapp.com${data.path}`
					});
					// isLoading(false);
				});
		}
	};

	return (
		<div className="upload-btn-wrapper">
			<button className="upload-btn">Upload file</button>
			<input type="file" name="myfile" className="logo-file-uploader" onChange={(e) => getFile(e)} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	update: (content) => dispatch(updateItem(content)),
	isLoading: (bool) => dispatch(isLoading(bool))
});

FileUploader.propTypes = {
	store: PropTypes.string,
	update: PropTypes.func
};

export default connect(null, mapDispatchToProps)(FileUploader);
