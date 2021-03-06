import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../../../redux/actions';
import PropTypes from 'prop-types';
import CustomPicker from './CustomPicker';

const ColorPicker = (props) => {
	const { update, store, id, componentID } = props;
	const [ state, setState ] = useState({ displayColorPicker: false, background: '#fff' });

	const handleClick = () => {
		setState({ ...state, displayColorPicker: !state.displayColorPicker });
	};

	const handleChange = (color) => {
		setState({ ...state, background: color.hex });
		update({ itemID: id, componentID, content: color.hex });
	};

	return (
		<React.Fragment>
			<button onClick={handleClick} style={{ cursor: 'pointer' }}>
				Pick Color
			</button>
			{state.displayColorPicker ? (
				<div style={{ flexBasis: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
					<CustomPicker onChange={handleChange} color={state.background} />
				</div>
			) : null}
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	update: (content) => dispatch(updateItem(content))
});

ColorPicker.propTypes = {
	store: PropTypes.string,
	update: PropTypes.func
};

export default connect(null, mapDispatchToProps)(ColorPicker);
