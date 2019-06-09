import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import UnlockCircleIcon from '@atlaskit/icon/glyph/unlock-circle';
import LockIcon from '@atlaskit/icon/glyph/lock';

const usersManagementNavItems = {
  id: 'users',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'users/manage',
      items: [
        {
          type: 'ContainerHeader',
          id: 'users/title',
          before: PeopleIcon,
          text: 'Users',
          subText: 'Admin',
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
        {
          type: 'LinkItem',
          id: 'users/admin',
          before: UnlockCircleIcon,
          text: 'Admin',
          to: '/users/admin',
        },
        {
          type: 'LinkItem',
          id: 'users/beneficiarios',
          before: LockIcon,
          text: 'Beneficiarios',
          to: '/users/beneficiarios',
        },
        {
          type: 'LinkItem',
          id: 'users/admin',
          before: LockIcon,
          text: 'Casos',
          to: '/users/casos',
        },
        {
          type: 'LinkItem',
          id: 'users/admin',
          before: LockIcon,
          text: 'Construccion',
          to: '/users/construccion',
        },
        {
          type: 'LinkItem',
          id: 'users/admin',
          before: LockIcon,
          text: 'Desembolsos',
          to: '/users/desembolsos',
        },
        {
          type: 'LinkItem',
          id: 'users/admin',
          before: LockIcon,
          text: 'Tramites',
          to: '/users/tramites',
        },
      ],
    },
  ],
};

export default usersManagementNavItems;
