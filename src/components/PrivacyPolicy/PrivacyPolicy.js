import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: June 14, 2021</p>

      <h1>Work in Progress</h1>

      <p>
        Thank you for choosing to be part of our community at Culinary Chefz ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at chefzculinary@gmail.com.
        <br></br>
        <br></br>
        When you visit our website http://www.culinarychefz.com (the "Website"), use our mobile application, use our Facebook application, as the case may be (the "App") and more generally, use any of our services (the "Services", which include the Website and App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
        <br></br>
        <br></br>
        This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.
        <br></br>
        <br></br>
        <strong>Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</strong>
      </p>
      <ol>
        <li>WHAT INFORMATION DO WE COLLECT?</li>
        <strong>Personal information you disclose to us</strong>
        
      </ol>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
