// @flow

import React, {Fragment} from 'react';
import { AtlassianWordmark } from '@atlaskit/logo';
import {
  HeaderSection,
  Item,
  MenuSection,
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
