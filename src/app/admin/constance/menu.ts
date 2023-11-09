import { environment } from 'src/environments/environment';
;
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs: IMenuItem[];
  //roles?: UserRole[];
}

const data: IMenuItem[] = [
  //Production
  {
    icon: 'iconsminds-factory',
    label: 'Production',
    to: `${adminRoot}/production`,
    subs: [
      {
        label: 'Catalog',
        to: `${adminRoot}/production/catalog`,
        subs: [
          {
            subs: [],
            icon: 'simple-icon-layers',
            label: 'Products',
            to: `${adminRoot}/production/catalog/product`,
          },
          {
            subs: [],
            icon: 'simple-icon-list',
            label: 'Categories',
            to: `${adminRoot}/production/catalog/category`,
          },

          {
            subs: [],
            icon: 'simple-icon-user-female',
            label: 'Skin Types',
            to: `${adminRoot}/production/catalog/skintype`,
          },
          {
            subs: [],
            icon: 'simple-icon-bag',
            label: 'Brands',
            to: `${adminRoot}/production/catalog/brand`,
          },
          {
            subs: [],
            icon: 'iconsminds-newspaper',
            label: 'news',
            to: `${adminRoot}/production/catalog/news`,
          },

        ],
      },
    ],
  },

  //Design
  {
    icon: 'simple-icon-picture',
    label: 'Design',
    to: `${adminRoot}/design`,
    subs: [
      {
        subs: [],
        icon: 'iconsminds-full-view-2',
        label: 'Templates',
        to: `${adminRoot}/design/template`,
      },
      {
        subs: [],
        icon: 'simple-icon-docs',
        label: 'Pages',
        to: `${adminRoot}/design/page`,
      },
    ],
  },
    //MainPage
    {
      icon: 'iconsminds-monitor---laptop',
      label: 'mainPage',
      to: `${adminRoot}/mainPage`,
      subs: [
        {
          subs: [],
          icon: 'iconsminds-photo',
          label: 'Images',
          to: `${adminRoot}/mainPage/images`,
        }
      ],
    },
     //Security
  {
    icon: 'iconsminds-security-settings',
    label: 'Security',
    to: `${adminRoot}/security`,
    subs: [
      {
        label: 'User',
        icon: 'iconsminds-business-man-woman',
        to: `${adminRoot}/security/user`,
        subs: [
        ],
      },
      {
        label: 'Role',
        icon: 'iconsminds-security-check',
        to: `${adminRoot}/security/role`,
        subs: [
        ],
      },
    ],
  },

];
export default data;
