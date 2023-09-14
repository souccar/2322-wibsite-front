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
              subs:[],
              icon: 'simple-icon-layers',
              label: 'Products',
              to: `${adminRoot}/production/catalog/product`,
            },
            {
              subs:[],
              icon: 'simple-icon-list',
              label: 'Categories',
              to: `${adminRoot}/production/catalog/category`,
            },
            
            {
              subs:[],
              icon: 'simple-icon-user-female',
              label: 'Skin Types',
              to: `${adminRoot}/production/catalog/skintype`,
            },
            {
              subs:[],
              icon: 'simple-icon-bag',
              label: 'Brands',
              to: `${adminRoot}/production/catalog/brand`,
            },  
            {
              subs:[],
              icon: 'iconsminds-newspaper',
              label: 'news',
              to: `${adminRoot}/production/catalog/news`,
            },

          ],
        },
      ],
    },
  // {
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.vien',
  //   to: `${adminRoot}/vien`,

  //   subs: [
  //     {
  //       subs:[],
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/vien/start`,
  //        roles: [UserRole.Admin],
  //     },

  //   ],
  // },
  // {
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: `${adminRoot}/second-menu`,
  //    // roles: [UserRole.Editor],
  //   subs: [
  //     {
  //       subs:[],
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: `${adminRoot}/second-menu/second`,
  //     },
  //   ],
  // },
  // {
  //   icon: 'iconsminds-bucket',
  //   label: 'menu.blank-page',
  //   to: `${adminRoot}/blank-page`,
  //   subs: []
  // },
  // {
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://vien-docs.coloredstrategies.com/',
  //   subs: [],
  //   newWindow: true,
  // },
];
export default data;
