import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import DocumentsIcon from '@atlaskit/icon/glyph/documents';
import EditorBulletListIcon from '@atlaskit/icon/glyph/editor/bullet-list';
import ArrowUpIcon from '@atlaskit/icon/glyph/arrow-up';
import OfficeBuildingIcon from '@atlaskit/icon/glyph/office-building';
import DocumentIcon from '@atlaskit/icon/glyph/document';


const bonoFormNavItems = (id, status) => ({
  id: 'bonos',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/bonos:header',
      items: [
        {
          type: 'ContainerHeader',
          id: 'bonos/header',
          before: DocumentIcon,
          text: `Bono #${id}`,
          subText: `${status}`,
        },
      ],
    },
    {
      type: 'MenuSection',
      id: 'product/bonos:menu',
      items: [
        {
          type: 'LinkItem',
          id: 'beneficiarios',
          before: PeopleGroupIcon,
          text: 'Beneficiarios',
          to: `/bonos/${id}/beneficiarios`,
        },
        {
          type: 'LinkItem',
          id: 'users',
          before: EditorBulletListIcon,
          text: 'Casos de Bono',
          to: `/bonos/${id}/casos-de-bono`,
        },
        {
          type: 'LinkItem',
          id: 'tramites',
          before: DocumentsIcon,
          text: 'Trámites',
          to: `/bonos/${id}/tramites`,
        },
        {
          type: 'LinkItem',
          id: 'construccion',
          before: OfficeBuildingIcon,
          text: 'Construcción',
          to: `/bonos/${id}/construccion`,
        },
        {
          type: 'LinkItem',
          id: 'desembolso',
          before: ArrowUpIcon,
          text: 'Desembolso',
          to: `/bonos/${id}/desembolso`,
        },
      ],
    },
  ],
});

export default bonoFormNavItems;
