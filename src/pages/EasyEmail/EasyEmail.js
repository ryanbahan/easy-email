import React from 'react';
import Form from '../../components/Form/Form';
import Preview from '../../components/EmailPreview/Preview';
import { connect } from 'react-redux';
import { setTemplate } from '../../redux/actions/';
import { DefaultTemplate } from '../../utils/Templates/DefaultTemplate';

const EasyEmail = ({ setTemplate }) => {
	setTemplate(DefaultTemplate);

	return (
		<React.Fragment>
			<Form />
			<Preview />
		</React.Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setTemplate: (template) => dispatch(setTemplate(template))
});

export default connect(null, mapDispatchToProps)(EasyEmail);
