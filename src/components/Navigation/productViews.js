import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import SettingsIcon from '@atlaskit/icon/glyph/settings';

export const productHomeViewCreate = (id,status) => {
  return {
    id: 'product/home',
    type: 'product',
    getItems: () => [
      {
        type: 'HeaderSection',
        id: 'product/home:header',
        items: [
          {
            type: 'ProjectInfoHeader',
            casoId: id,
            status: status,
            to: '/',
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
            text: 'Beneficiarios',
            to: '/beneficiarios'
          },
          { type: 'LinkItem',
            id: 'users',
            before: PeopleGroupIcon,
            text: 'Casos de Bono',
            to: '/casos-de-bono'
          },
          {
            type: 'LinkItem',
            id: 'settings',
            before: SettingsIcon,
            text: 'Trámites',
            to: '/tramites'
          },
          {
            type: 'LinkItem',
            id: 'settings',
            before: SettingsIcon,
            text: 'Construcción',
            to: '/construccion'
          },
          {
            type: 'LinkItem',
            id: 'settings',
            before: SettingsIcon,
            text: 'Desembolso',
            to: '/desembolso'
          }
        ],
      },
    ]
  }
};