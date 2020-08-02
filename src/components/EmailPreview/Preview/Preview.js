import React from 'react';
import EmailHeader from '../EmailHeader/EmailHeader';
import EmailImage from '../EmailImage/EmailImage';
import EmailImageTagline from '../EmailImageTagline/EmailImageTagline';
import EmailContent from '../EmailContent/EmailContent';
import EmailFooter from '../EmailFooter/EmailFooter';
import EmailCTA from '../EmailCTA/EmailCTA';
import { connect } from 'react-redux';
import './Preview.css';

const getComponent = (str) => {
  switch (str) {
    case "Header":
      return <EmailHeader key={str} />
    case "Image":
      return <EmailImage key={str} />
    case "Banner":
      return <EmailImageTagline key={str} />
    case "Content":
      return <EmailContent key={str} />
    case "CTA":
      return <EmailCTA key={str} />
    case "Footer":
      return <EmailFooter key={str} />
  }
}

const Preview = ({ components }) => {
  return (
    <div className="preview" style={{margin: "25px"}}>
      { components.map(component => getComponent(component)) }
    </div>
  )
}

const mapStateToProps = state => ({
  components: state.components
})

export default connect(mapStateToProps)(Preview);
