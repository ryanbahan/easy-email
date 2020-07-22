import React from 'react';
import { connect } from 'react-redux';
import { isLoading, hasError } from '../../utils/Actions';
import { createChart } from '../../utils/CreateChart';
import { requestTones } from '../../utils/RequestTones';
import './Analyzer.css';
import EmailImageTagline from '../EmailPreview/EmailImageTagline/EmailImageTagline';
import EmailContent from '../EmailPreview/EmailContent/EmailContent';
import EmailCTA from '../EmailPreview/EmailCTA/EmailCTA';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Analyzer extends React.Component {
  constructor() {
    super();
    this.contentRef = React.createRef();
    this.ctaRef = React.createRef();
    this.taglineRef = React.createRef();
  }

  async componentDidMount() {
    this.props.isLoading(true);

    try {
      const contentTones = await requestTones(this.props.content);
      const taglineTones = await requestTones(this.props.tagline);
      const taglineButtonTones = await requestTones(this.props.tagLineButton);
      const taglineAndButtonTones = taglineTones.concat(taglineButtonTones);
      const ctaTones = await requestTones(this.props.cta);

      const contentRef = this.contentRef.current.getContext("2d");
      const taglineRef = this.taglineRef.current.getContext("2d");
      const ctaRef = this.ctaRef.current.getContext("2d");

      createChart(contentRef, contentTones, "doughnut");
      createChart(taglineRef, taglineAndButtonTones);
      createChart(ctaRef, ctaTones);
    } catch(err) {
      this.props.hasError(err);
    }

    this.props.isLoading(false);
  }

  render() {
    return (
      <div className="tone-analysis-view">
      <Link to="/"><button className="back">{'< Back'}</button></Link>
      {this.props.loading && <LoadingSpinner />}
        <h2>Content Sentiment</h2>
        <div className="email-content-wrapper">
          <EmailContent />
        </div>
        <canvas
          ref={this.contentRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
        <h2>Tagline Sentiment</h2>
        <div className="email-tagline-wrapper">
          <EmailImageTagline />
        </div>
        <canvas
          ref={this.taglineRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
        <h2>Call-to-action Sentiment</h2>
        <div className="email-cta-wrapper">
          <EmailCTA />
        </div>
        <canvas
          ref={this.ctaRef}
          style={{maxWidth: "50rem", maxHeight: "30rem"}}
        >
        </canvas>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  hasError: err => dispatch(hasError(err)),
})

const mapStateToProps = state => ({
  content: state.form.content,
  tagline: state.form.mainImageTagline,
  tagLineButton: state.form.mainImageButtonCopy,
  cta: state.form.cta,
  loading: state.loading,
});

Analyzer.propTypes = {
  content: PropTypes.string,
  tagline: PropTypes.string,
  taglineButton: PropTypes.string,
  cta: PropTypes.string,
  loading: PropTypes.bool,
  isLoading: PropTypes.func,
  hasError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Analyzer);
