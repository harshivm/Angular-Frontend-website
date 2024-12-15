import { ReferralCampaignComponent } from './../../views/referral-campaign/referral-campaign.component';
import { PointDetailsComponent } from './../../views/point-details/point-details.component';
import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { MessagingReportComponent } from './messaging-report/messaging-report.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FraudReportsComponent } from './fraud-reports/fraud-reports.component';
import { preportroutingModule } from './p-reports-routing.module';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        preportroutingModule,

        FraudReportsComponent,
        MessagingReportComponent,
        InstantRedeemComponent,
        PointDetailsComponent,
        ReferralCampaignComponent,

    ],
    declarations: [],
})
export class preportsModule { }