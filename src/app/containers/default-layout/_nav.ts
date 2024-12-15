import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/customer',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Partner',
  //   url: '/partner',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Referral Campaign',
    url: '/referral_camp',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Instant Redeemption',
    url: '/instant_redeem',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Points Details',
    url: '/point_details',
    iconComponent: { name: 'cil-puzzle' },
  },

  {
    name: 'Reports',
    url: '/report',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      
      {
        name: 'Message Reports',
        url: '/reports/msg_report'
      },
      {
        name: 'Referral Campaign',
        url: '/reports/ref_camp_search'
      },
      
    ]
  },
  {
    name: 'Help',
    url: '/help_comp'
  },
  

];
