import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import mnImage from './images/brooke-cagle-WfV4KscvvBQ-unsplash.jpg';
import bkImage from './images/hiurich-granja-fWtQstoF_7Y-unsplash.jpg';
import qeImage from './images/zahir-namane-YTsEZrHqDq0-unsplash.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Manhattan',
          mnImage,
          '?address=New%20York%20City%2C%20New%20York%2C%20USA&bounds=40.82200132%2C-73.91640126%2C40.70060067%2C-74.05596345'
        )}
        {locationLink(
          'Brooklyn',
          bkImage,
          '?address=New%20York%20City%2C%20New%20York%2C%20USA&bounds=40.70674621%2C-73.90363844%2C40.5851351%2C-74.04320063'
        )}
        {locationLink(
          'Queens',
          qeImage,
          '?address=New%20York%20City%2C%20New%20York%2C%20USA&bounds=40.80197801%2C-73.72216338%2C40.68054076%2C-73.86172557'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
