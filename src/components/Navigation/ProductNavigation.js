// @flow

import React, {Fragment} from 'react';
import { JiraWordmark as JiraWordmarkLogo } from '@atlaskit/logo';
import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import FolderIcon from '@atlaskit/icon/glyph/folder';
import IssuesIcon from '@atlaskit/icon/glyph/issues';

import GlobalNavigation from '@atlaskit/global-navigation';
import { AtlassianIcon, AtlassianWordmark } from '@atlaskit/logo';
import {
  GroupHeading,
  HeaderSection,
  Item,
  LayoutManager,
  MenuSection,
  NavigationProvider,
  Separator,
  Wordmark,
} from '@atlaskit/navigation-next';

const ProductNavigation = () => (
  <Fragment>
  <HeaderSection>
    {({ className }) => (
      <div className={className}>
        <Wordmark wordmark={AtlassianWordmark} />
      </div>
    )}
  </HeaderSection>
  <MenuSection>
    {({ className }) => (
      <div className={className}>
        <Item text="Dashboard" />
        <Item text="Users" />
        <Item text="Settings" />
      </div>
    )}
  </MenuSection>
</Fragment>
);

export default ProductNavigation;
