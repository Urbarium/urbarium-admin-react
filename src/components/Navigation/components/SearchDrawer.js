import React from 'react';
import Drawer from '@atlaskit/drawer';

export const SearchDrawer = ({ children, isOpen, onClose }: *) => (
  <Drawer onClose={onClose} isOpen={isOpen}>
    {children}
  </Drawer>
);