import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MsgReportsComponent } from './msg-reports/msg-reports.component';
import { ReferralCampaignReportsComponent } from './referral-campaign-reports/referral-campaign-reports.component';

// Components Routing
import { ReportRoutingModule } from './reports-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReportRoutingModule,
        ReactiveFormsModule,
        MsgReportsComponent
    ],
    declarations: [

        // MsgReportComponent,
        // RefCampSearchComponent
    ],
})
export class ReportsModule { }
