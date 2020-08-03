import React from 'react';
import Header from '../EmailComponents/Header/Header';
import FullWidthImage from '../EmailComponents/FullWidthImage/FullWidthImage';
import SubHead from '../EmailComponents/SubHead/SubHead';
import TextBlock from '../EmailComponents/TextBlock/TextBlock';
import Footer from '../EmailComponents/Footer/Footer';
import FullWidthButton from '../EmailComponents/FullWidthButton/FullWidthButton';
import { connect } from 'react-redux';
import './Preview.css';

const getComponent = (obj) => {
	switch (obj.component) {
		case 'Header':
			return <Header key={obj.title} {...obj} />;
		case 'Image':
			return <FullWidthImage key={obj.title} {...obj} />;
		case 'Banner':
			return <SubHead key={obj.title} {...obj} />;
		case 'TextBlock':
			return <TextBlock key={obj.title} {...obj} />;
		case 'FullWidthButton':
			return <FullWidthButton key={obj.title} {...obj} />;
		case 'Footer':
			return <Footer key={obj.title} {...obj} />;
	}
};

const Preview = ({ template }) => {
	return (
		<section className="preview-container">
			<div className="preview" style={{ margin: '25px' }}>
				{template.components.map((component) => getComponent(component))}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	template: state.template
});

export default connect(mapStateToProps)(Preview);
