import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import PeopleIcon from '@atlaskit/icon/glyph/people';

const usersManagementNavItems = {
  id: 'users',
  type: 'product',
  getItems: () => [
    {
      type: 'MenuSection',
      id: 'users/manage',
      items: [
        {
          type: 'ContainerHeader',
          id: 'users/title',
          before: PeopleIcon,
          text: 'Users',
          subText: 'Admin',
          to: '/users',
        },
      ],
    },
    {
      type: 'MenuSection',
      id: 'product/home:menu',
      items: [
        {
          type: 'LinkItem',
          id: 'users/all',
          before: PeopleGroupIcon,
          text: 'All',
          to: '/users/all',
        },
      ],
    },
  ],
};

export default usersManagementNavItems;
