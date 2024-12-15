import { AuthGuard } from './containers/auth.guard';
// import { authGuard } from './auth-guard.guard';

import { AdminComponent } from './admin/admin.component';
import { TooltipLangComponent } from './p-views/tooltip-lang/tooltip-lang.component';
import { PHelpComponent } from './p-views/p-help/p-help.component';
import { EmployeeComponent } from './p-views/employee/employee.component';
import { DiscountComponent } from './p-views/discount/discount.component';
import { TransactionComponent } from './p-views/transaction/transaction.component';
import { CreatedrawComponent } from './p-views/createdraw/createdraw.component';

import { PartnerComponent } from './views/partner/partner.component';
import { CustomerComponent } from './views/customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { ProtectedComponent } from './protected/protected.component';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CusRegisterComponent } from './views/cus-register/cus-register.component';
import { ResetComponent } from './views/pages/reset/reset.component'
import { ReferralCampaignComponent } from './views/referral-campaign/referral-campaign.component';
import { InstantRedeemComponent } from './views/instant-redeem/instant-redeem.component';
import { PointDetailsComponent } from './views/point-details/point-details.component';
import { ReportsComponent } from './views/reports/reports.component';
import { HelpUsComponent } from './views/help-us/help-us.component';
import { TooltipComponent } from '@coreui/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      // title: ''
    },
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
        // canActivate: [AuthGuard],
        // children: [
        //   {
        //     path: 'help_comp',
        //     component: HelpUsComponent,
        //     data: {
        //       title: 'help_comp'
        //     }
        //   },
        //   {
        //     path: 'referral_camp',
        //     component: ReferralCampaignComponent,
        //     data: {
        //       title: 'referral_camp'
        //     }
        //   },
        // ]

      },
      {
        path: 'partner',
        component: PartnerComponent,
        // canActivate :[AuthGuard],
        // children: [
        //   {
        //     path: 'help_comp',
        //     component: HelpUsComponent,
        //     data: {
        //       title: 'help_comp'
        //     }
        //   },
        //   {
        //     path: 'referral_camp',
        //     component: ReferralCampaignComponent,
        //     data: {
        //       title: 'referral_camp'
        //     }
        //   },
        // ]

      },








      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./views/reports/reports.module').then((m) => m.ReportsModule)
      },
      {
        path: 'referral_camp',
        component: ReferralCampaignComponent,
        data: {
          title: 'referral_camp'
        }
      },
      {
        path: 'instant_redeem',
        component: InstantRedeemComponent,
        data: {
          title: 'instant_redeem'
        }
      },
      {
        path: 'point_details',
        component: PointDetailsComponent,
        data: {
          title: 'point_details'
        }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: {
          title: 'reports'
        }
      },
      {
        path: 'help_comp',
        component: HelpUsComponent,
        data: {
          title: 'help_comp'
        }
      },

      {
        path: 'Createdraw',
        component: CreatedrawComponent,
        data: {
          title: 'Createdraw'
        }
      },
      {
        path: 'Createdraw',
        loadChildren: () =>
          import('./p-views/createdraw/createdraw.module').then((m) => m.createdrawModule)
      },

      {
        path: 'discount',
        component: DiscountComponent,
        data: {
          title: 'discount'
        }
      },

      {
        path: 'discount',
        loadChildren: () =>
          import('./p-views/discount/discount.module').then((m) => m.discountModule)
      },

      {
        path: 'transaction',
        component: TransactionComponent,
        data: {
          title: 'transaction'
        }
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('./p-views/transaction/transaction.module').then((m) => m.transactionModule)
      },

      {
        path: 'employee',
        loadChildren: () =>
          import('./p-views/employee/employee.module').then((m) => m.empModule)
      },
      {
        path: 'p-reports',
        loadChildren: () =>
          import('./p-views/p-reports/p-reports.module').then((m) => m.preportsModule)
      },
      {
        path: 'utility',
        loadChildren: () =>
          import('./p-views/utility/utility.module').then((m) => m.utilityModule)
      },
      {
        path: 'tooltip-lang',
        component: TooltipLangComponent,
        data: {
          title: 'tooltip-lang'
        }
      },
      {
        path: 'p-help',
        component: PHelpComponent,
        data: {
          title: 'help'
        }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: {
      title: 'Admin Page'
    }
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      title: 'Customer Page'
    }
  },

  {
    path: 'partner',
    component: PartnerComponent,
    data: {
      title: 'Partner Page'
    }
  },
  {
    path: 'cus-register',
    component: CusRegisterComponent,
    data: {
      title: 'CusRegister Page'
    }
  },
  {
    path: 'reset',
    component: ResetComponent,
    data: {
      title: 'reset'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  },
  // { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
