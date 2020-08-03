import React, { useState } from 'react';
import './DropdownContainer.css';
import Dropdown from '../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { toggleComponentVisibility } from '../../../redux/actions';
import PropTypes from 'prop-types';

const DropdownContainer = ({ toggleComponentVisibility, title, active, formItems, id }) => {
	const [ state, setState ] = useState({ dropdown: false });

	const toggleChecked = (e) => {
		toggleComponentVisibility({ id, active: !active });
	};

	const toggleDropdown = () => {
		setState({ dropdown: !state.dropdown });
	};

	return (
		<div className="dropdown-wrapper">
			<div className="dropdown-container">
				<div className="title-wrapper">
					<input
						type="checkbox"
						className="visibility-toggle"
						onClick={() => toggleChecked()}
						defaultChecked={active}
					/>
					<h4 style={{ fontWeight: '500', fontSize: '1.1rem', padding: '0', margin: '0' }}>{title}</h4>
				</div>
				<p className="dropdown-toggle" onClick={() => toggleDropdown()}>
					+
				</p>
			</div>
			<Dropdown dropdownActive={state.dropdown} formItems={formItems} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleComponentVisibility: (title, bool) => dispatch(toggleComponentVisibility(title, bool))
});

const mapStateToProps = (state, ownProps) => ({
	active: state.template.components.find((item) => item.id === ownProps.id).active
});

DropdownContainer.propTypes = {
	formItems: PropTypes.array,
	title: PropTypes.string,
	active: PropTypes.bool,
	toggleComponentVisibility: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
