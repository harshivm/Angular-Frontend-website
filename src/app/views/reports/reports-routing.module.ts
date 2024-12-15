import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgReportsComponent } from './msg-reports/msg-reports.component';
import { ReferralCampaignReportsComponent } from './referral-campaign-reports/referral-campaign-reports.component';
const routes: Routes = [
    {
        path: '',
        data: {
            title: 'reports',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },
            {
                path: 'msg_report',
                component: MsgReportsComponent,
                data: {
                    title: 'msg_report',
                },
            },
            {
                path: 'ref_camp_search',
                component: ReferralCampaignReportsComponent,
                data: {
                    title: 'ref_camp_search',
                },
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportRoutingModule { }