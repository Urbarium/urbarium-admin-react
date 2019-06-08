import React from 'react';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import SearchIcon from '@atlaskit/icon/glyph/search';
import AddIcon from '@atlaskit/icon/glyph/add';
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle';
import Avatar from '@atlaskit/avatar';
import GlobalLink from '../components/GlobalLink';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';

export const globalNavPrimaryItems = ({ onSearchClick }: *) => [
  {
    id: 'jira',
    icon: ({ label }: { label: string }) => (
      <EmojiAtlassianIcon size="medium" label={label} />
    ),
    label: 'Jira',
    to: '/',
    component: GlobalLink,
  },
  { id: 'metrics', icon: GraphBarIcon },
  { id: 'search', icon: SearchIcon, onClick: onSearchClick },
  { id: 'create', icon: AddIcon },
];

export const globalNavSecondaryItems = ({ onProfileClick, onLogoutClick, profile }: *) => [
  {
    id: 'logout',
    icon: SignOutIcon,
    label: 'Help',
    size: 'small',
    onClick: onLogoutClick
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
    onClick: onProfileClick
  },
];