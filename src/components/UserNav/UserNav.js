import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { LinkTabNavHorizontal } from '../../components';
import { ensureOwnListing } from '../../util/data';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { getListingType, createSlug } from '../../util/urlHelpers';
import { ensureCurrentUser } from '../../util/data';

import css from './UserNav.module.css';

const listingTab = (listing, selectedPageName) => {
  if (!listing) {
    return {
      text: <FormattedMessage id="UserNav.newListing" />,
      selected: selectedPageName === 'NewListingPage',
      linkProps: {
        name: 'NewListingPage',
      },
    };
  }
  const currentListing = ensureOwnListing(listing);
  const id = currentListing.id.uuid;
  const { title = '', state } = currentListing.attributes;
  const slug = createSlug(title);
  const isDraft = state === LISTING_STATE_DRAFT;

  return {
    text: <FormattedMessage id="UserNav.editListing" />,
    selected: selectedPageName === 'EditListingPage',
    linkProps: {
      name: 'EditListingPage',
      params: {
        id,
        slug,
        type: getListingType(isDraft),
        tab: 'photos',
      },
    },
  };
};

const UserNav = props => {
  const { className, rootClassName, selectedPageName, listing, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  const user = ensureCurrentUser(currentUser);

  const { privateData } = user.attributes.profile;
  const is_chef = !!privateData && !!privateData.is_chef;

  const tabs_full = [
    {
      ...listingTab(listing, selectedPageName),
    },
    {
      text: <FormattedMessage id="UserNav.profileSettingsPage" />,
      selected: selectedPageName === 'ProfileSettingsPage',
      disabled: false,
      linkProps: {
        name: 'ProfileSettingsPage',
      },
    },
    {
      text: <FormattedMessage id="UserNav.contactDetailsPage" />,
      selected: ACCOUNT_SETTINGS_PAGES.includes(selectedPageName),
      disabled: false,
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
  ];

  const tabs = [
    {
      text: <FormattedMessage id="UserNav.profileSettingsPage" />,
      selected: selectedPageName === 'ProfileSettingsPage',
      disabled: false,
      linkProps: {
        name: 'ProfileSettingsPage',
      },
    },
    {
      text: <FormattedMessage id="UserNav.contactDetailsPage" />,
      selected: ACCOUNT_SETTINGS_PAGES.includes(selectedPageName),
      disabled: false,
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
  ];

  return (
    <LinkTabNavHorizontal
      className={classes}
      tabRootClassName={css.tab}
      tabs={is_chef ? tabs_full : tabs}
      skin="dark"
    />
  );
};

UserNav.defaultProps = {
  className: null,
  rootClassName: null,
};

const { string } = PropTypes;

UserNav.propTypes = {
  className: string,
  rootClassName: string,
  selectedPageName: string.isRequired,
};

export default UserNav;
