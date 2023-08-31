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
  {
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.vien',
    to: `${adminRoot}/vien`,

    subs: [
      {
        subs:[],
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: `${adminRoot}/vien/start`,
        // roles: [UserRole.Admin],
      },

    ],
  },
  {
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.second-menu',
    to: `${adminRoot}/second-menu`,
     // roles: [UserRole.Editor],
    subs: [
      {
        subs:[],
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
    subs: []
  },
  {
    icon: 'iconsminds-library',
    label: 'menu.docs',
    to: 'https://vien-docs.coloredstrategies.com/',
    subs: [],
    newWindow: true,
  },
];
export default data;
