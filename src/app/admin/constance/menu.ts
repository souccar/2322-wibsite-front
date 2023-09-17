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

          ],
        },
      ],
    },
   //skinType

  {
    icon: 'simple-icon-user-female',
    label: 'Skin Types',
    to: `${adminRoot}/SkinType`,
    subs: [
      {
        subs:[],
        icon: 'simple-icon-user-female',
        label: 'Skin Types',
        to: `${adminRoot}/SkinType/skin-type`,

      },

    ],
  },

   //Brand

   {
    icon: 'simple-icon-bag',
    label: 'Brand',
    to: `${adminRoot}/Brand`,
    subs: [
      {
        subs:[],
        icon: 'simple-icon-bag',
        label: 'Brand',
        to: `${adminRoot}/Brand/brand`,
      },

    ],
  },

   //News

   {
    icon: 'iconsminds-newspaper',
    label: 'News',
    to: `${adminRoot}/News`,
    subs: [
      {
        subs:[],
        icon: 'iconsminds-newspaper',
        label: 'News',
        to: `${adminRoot}/News/news`,
      },

    ],
  },

];
export default data;
