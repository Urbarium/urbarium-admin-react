import MarketplaceIcon from '@atlaskit/icon/glyph/marketplace';

const usersManagementNavItems = {
  id: 'users',
  type: 'product',
  getItems: () => [
    {
      type: 'MenuSection',
      id: 'product/home:beneficiarios',
      items: [
        {
          type: 'LinkItem',
          id: 'beneficiarios',
          before: MarketplaceIcon,
          text: 'Beneficiarios',
          to: '/beneficiarios'
        },
      ]
    }
  ]
};

export default usersManagementNavItems;