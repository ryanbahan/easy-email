import React from 'react';
import EmailHeader from '../EmailHeader/EmailHeader';
import EmailImage from '../EmailImage/EmailImage';
import EmailImageTagline from '../EmailImageTagline/EmailImageTagline';
import EmailContent from '../EmailContent/EmailContent';
import EmailFooter from '../EmailFooter/EmailFooter';
import EmailCTA from '../EmailCTA/EmailCTA';
import { connect } from 'react-redux';
import './Preview.css';

const getComponent = (obj) => {
  switch (obj.component) {
    case "Header":
      return <EmailHeader key={obj.title} {...obj} />
    case "Image":
      return <EmailImage key={obj.title} {...obj} />
    case "Banner":
      return <EmailImageTagline key={obj.title} {...obj} />
    case "Content":
      return <EmailContent key={obj.title} {...obj} />
    case "CTA":
      return <EmailCTA key={obj.title} {...obj} />
    case "Footer":
      return <EmailFooter key={obj.title} {...obj} />
  }
}

const Preview = ({ template }) => {
  return (
    <div className="preview" style={{margin: "25px"}}>
      { template.map(component => getComponent(component)) }
    </div>
  )
}

const mapStateToProps = state => ({
  template: state.template
})

export default connect(mapStateToProps)(Preview);
