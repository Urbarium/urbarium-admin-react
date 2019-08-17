import React from 'react';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import SearchIcon from '@atlaskit/icon/glyph/search';
import AddIcon from '@atlaskit/icon/glyph/add';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import Avatar from '@atlaskit/avatar';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';
import GlobalLink from 'components/Navigation/components/GlobalLink';

export const globalNavPrimaryItems = ({
  onDashboardClick, onSearchClick, onUsersManagementClick, onAddBonoClick,
}) => [
  {
    id: 'jira',
    icon: ({ label }) => (
      <EmojiAtlassianIcon size="medium" label={label} />
    ),
    label: 'Jira',
    to: '/',
    component: GlobalLink,
  },
  { id: 'metrics', icon: GraphBarIcon, onClick: onDashboardClick },
  { id: 'users', icon: PeopleGroupIcon, onClick: onUsersManagementClick },
  { id: 'search', icon: SearchIcon, onClick: onSearchClick },
  { id: 'create', icon: AddIcon, onClick: onAddBonoClick },
];

export const globalNavSecondaryItems = ({ onProfileClick, onLogoutClick, profile }) => [
  {
    id: 'logout',
    icon: SignOutIcon,
    label: 'Help',
    size: 'small',
    onClick: onLogoutClick,
  },
  {
    icon: () => (
      <Avatar
        borderColor="transparent"
        isActive={false}
        isHover={false}
        size="small"
        src={profile.avatar}
      />
    ),
    label: 'Profile',
    size: 'small',
    id: 'profile',
    onClick: onProfileClick,
  },
];
