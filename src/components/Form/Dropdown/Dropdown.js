import React from 'react';
import './Dropdown.css';
import Colorpicker from '../Colorpicker/ColorPicker';
import FileUploader from '../FileUploader/FileUploader';
import TextField from '../TextField/TextField';
import ButtonCopyField from '../ButtonCopyField/ButtonCopyField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleItemVisibility } from '../../../redux/actions';

const Dropdown = (props) => {
	const { dropdownActive, formItems, toggleItemVisibility, id } = props;

	const getFormComponent = (item) => {
		switch (item.component) {
			case 'ButtonCopyField':
				return <ButtonCopyField store={item.store} constraints={item.constraints} />;
			case 'Colorpicker':
				return <Colorpicker store={item.store} constraints={item.constraints} />;
			case 'TextField':
				return <TextField store={item.store} constraints={item.constraints} />;
			case 'FileUploader':
				return <FileUploader store={item.store} constraints={item.constraints} />;
			default:
				return null;
		}
	};

	const toggleChecked = (item) => {
		toggleItemVisibility({ componentID: id, itemID: item.id, active: !item.active });
	};

	const getFormItems = () => {
		return formItems.map((item) => (
			<div className="form-item" key={item.title}>
				<div className="form-title-wrapper">
					{item.checkbox && (
						<input
							type="checkbox"
							onClick={() => toggleChecked(item)}
							defaultChecked={item.active}
							style={{ cursor: 'pointer' }}
						/>
					)}
					{item.checkbox && <p style={{ fontSize: '0.85rem', marginLeft: '0.25rem' }}>{item.title}</p>}
					{!item.checkbox && <p style={{ fontSize: '0.85rem', marginLeft: '1.4rem' }}>{item.title}</p>}
				</div>
				{getFormComponent(item)}
			</div>
		));
	};

	return <div className={dropdownActive ? 'dropdown' : 'hidden dropdown'}>{getFormItems()}</div>;
};

const mapDispatchToProps = (dispatch) => ({
	toggleItemVisibility: (title, bool) => dispatch(toggleItemVisibility(title, bool))
});

Dropdown.propTypes = {
	dropdown: PropTypes.bool,
	formItems: PropTypes.array
};

export default connect(null, mapDispatchToProps)(Dropdown);
