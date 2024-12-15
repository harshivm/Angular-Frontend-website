import { ReferralCampaignComponent } from './../../views/referral-campaign/referral-campaign.component';
import { PointDetailsComponent } from './../../views/point-details/point-details.component';
import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { MessagingReportComponent } from './messaging-report/messaging-report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraudReportsComponent } from './fraud-reports/fraud-reports.component';

const routes: Routes = [
    {
        path: '',
        data:
        {
            title: 'preport',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },

            {
                path: 'fraud_report',
                component: FraudReportsComponent,
                data: {
                    title: 'fraud_report',
                },
            },
            {
                path: 'msg_report',
                component: MessagingReportComponent,
                data: {
                    title: 'msg_report',
                },
            },
            {
                path: 'report_insredem',
                component: InstantRedeemComponent,
                data: {
                    title: 'report_insredem',
                },
            },
            {
                path: 'report_refcamp',
                component: ReferralCampaignComponent,
                data: {
                    title: 'report_refcamp',
                },
            },
            {
                path: 'report_pnt_details',
                component: PointDetailsComponent,
                data: {
                    title: 'report_pnt_details',
                },
            },

        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class preportroutingModule { }