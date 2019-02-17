import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import SettingsIcon from '@atlaskit/icon/glyph/settings';

export const productHomeView = {
  id: 'product/home',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/home:header',
      items: [
        {
          type: 'Item',
          text: 'Urbarium',
          id: 'urbarium-wordmark',
        },
      ],
    },
    {
      type: 'MenuSection',
      id: 'product/home:menu',
      items: [
        {
          type: 'LinkItem',
          id: 'dashboards',
          before: DashboardIcon,
          text: 'Dashboards',
          to: '/'
        },
        { type: 'LinkItem', 
          id: 'users', 
          before: PeopleGroupIcon, 
          text: 'Users',
          to: '/users'
        },
        {
          type: 'LinkItem',
          id: 'settings',
          before: SettingsIcon,
          text: 'Settings',
          to: '/settings'
        }
      ],
    },
  ]
}

