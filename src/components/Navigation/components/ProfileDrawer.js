import React from 'react';
import Drawer from '@atlaskit/drawer';

const ProfileDrawer = ({ children, isOpen, onClose }: *) => (
  <Drawer onClose={onClose} isOpen={isOpen}>
    {children}
  </Drawer>
);

export default ProfileDrawer;
