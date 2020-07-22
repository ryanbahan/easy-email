import React from 'react';
import EmailHeader from '../EmailHeader/EmailHeader';
import EmailImage from '../EmailImage/EmailImage';
import EmailImageTagline from '../EmailImageTagline/EmailImageTagline';
import EmailContent from '../EmailContent/EmailContent';
import EmailFooter from '../EmailFooter/EmailFooter';
import EmailCTA from '../EmailCTA/EmailCTA';
import './Preview.css';

const Preview = () => {
  return (
    <div className="preview" style={{margin: "25px"}}>
      <EmailHeader />
      <EmailImage />
      <EmailImageTagline />
      <EmailContent />
      <EmailCTA />
      <EmailFooter />
    </div>
  )
}

export default Preview;
