import React from 'react';
import './Form.css';
import DropdownContainer from '../FormComponents/DropdownContainer/DropdownContainer';
import Exporter from '../FormComponents/Exporter/Exporter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Form = ({ template }) => {
	const menuContainers = template.components.map((item) => <DropdownContainer key={item.id} {...item} />);

	return (
		<section className="builder">
			<div className="menu-containers-wrapper">{menuContainers}</div>
			<div className="buttons-wrapper">
				<Exporter />
			</div>
		</section>
	);
};

Form.propTypes = {
	menus: PropTypes.array
};

const mapStateToProps = (state) => ({
	template: state.template
});

export default connect(mapStateToProps)(Form);
