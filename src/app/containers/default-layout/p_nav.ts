import { INavData } from '@coreui/angular';

export const p_navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/partner',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Createdraw',
    url: '/Createdraw',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'create_your_draw',
        url: '/Createdraw/create_your_draw'
      },
      {
        name: 'Draw Winner',
        url: '/Createdraw/draw_win'
      },

    ]
  },
  {
    name: 'discount',
    url: '/discount',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'create_camp',
        url: '/discount/create_camp'
      },
      {
        name: 'reports',
        url: '/discount/reports'
      },

    ]
  },
  {
    name: 'transaction',
    url: '/transaction',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'assign points',
        url: '/transaction/assign_points'
      },
      {
        name: 'Instant Redemption',
        url: '/transaction/ins_redem'
      },
      {
        name: 'Check Instant Redemption',
        url: '/transaction/chk_ins_redem'
      },

    ]
  },
  {
    name: 'employee',
    url: '/employee',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'employee master',
        url: '/employee/emp_master'
      },
    ]
  },
  {
    name: 'p-reports',
    url: '/preport',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'point details',
        url: '/p-reports/report_pnt_details'
      },
      {
        name: 'Instant Redemption',
        url: '/p-reports/report_insredem'
      },
      {
        name: 'msg report',
        url: '/p-reports/msg_report'
      },
      {
        name: 'fraud report',
        url: '/p-reports/fraud_report'
      },
      {
        name: 'referral campaign',
        url: '/p-reports/report_refcamp'
      },
    ]
  },
  {
    name: 'utility',
    url: '/utility',
    iconComponent: { name: 'cil-puzzle' },
    children: [

      {
        name: 'Message',
        url: '/utility/utility_msg'
      },
      {
        name: 'Download Customer data',
        url: '/utility/download_cus_data'
      },
      {
        name: 'utility_ins_redem',
        url: '/utility/utility_ins_redem'
      },
      {
        name: 'create_ref_camp',
        url: '/utility/create_refcamp'
      },
      {
        name: 'partner_app_handler',
        url: '/utility/p_apphandler'
      },
      {
        name: 'set_bonus_pnts',
        url: '/utility/set_bonus_pnts'
      },
      {
        name: 'set_add_bonus_pnts',
        url: '/utility/set_add_bonus_pnts'
      },
      {
        name: 'import_cus',
        url: '/utility/import_cus'
      },
    ]
  },

  {
    name: 'Tooltip Language',
    url: '/tooltip-lang',
    iconComponent: { name: 'cil-puzzle' },
  },
  {
    name: 'Help',
    url: '/p-help',
    iconComponent: { name: 'cil-puzzle' },
  },



];