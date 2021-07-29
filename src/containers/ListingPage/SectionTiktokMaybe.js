import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

// Import css from existing CSS Modules file:
import css from './ListingPage.module.css';

// Create new React component
const SectionTiktokMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { publicData } = props;
  const video_link = publicData && publicData.tiktok_video ? publicData.tiktok_video : null;

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
  if (!publicData || !video_link) {
    return null;
  }

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.tiktok" />
      </h2>
      <div dangerouslySetInnerHTML={{ __html: video_link }} />
    </div>
  );
};

export default SectionTiktokMaybe;
