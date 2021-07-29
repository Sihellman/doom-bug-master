import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Culinary Chefz',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Find new depths in your culinary arts</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Cooking is an art that everyone should dabble in.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Each budding chef is an individual, and each one of us needs different care.
                Working together with an experienced chef offers the possibility to rise
                our practise to a whole new level.
              </h2>

              <p>
                Whether it is the alignment of asanas or being able to set the focus of the class,
                we all have our own struggles and goals. Some of these cannot be addressed in a
                regular class of twenty chefs. Working together with the experienced chefs
                from Culinary Chefz, you can together create just the right class for you.
              </p>

              <h3 className={css.subtitle}>Are you a chefs?</h3>

              <p>
                Culinary Chefz offers you a platform through which you can reach thousands of chefs
                anywhere in the world. Offering private culinary classes through Culinary Chefz offers you a
                possibility to grow your customer base and earn some extra income on top of your
                regular classes.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Culinary Chefz
              </h3>
              <p>
                Culinary Chefz is brought to you by{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Sharetribe
                offers anyone a possibility to create a marketplace without restricting your own
                creativity. Do not hesitate to reach out and learn how to best turn your
                marketplace idea to reality.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
