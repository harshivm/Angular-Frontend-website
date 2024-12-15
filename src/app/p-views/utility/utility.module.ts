import { RefCampaignComponent } from './ref-campaign/ref-campaign.component';
import { MessagingComponent } from './messaging/messaging.component';
import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { BonusPointsComponent } from './bonus-points/bonus-points.component';
import { AdditionalPointsComponent } from './additional-points/additional-points.component';
import { PartnerHeaderComponent } from './partner-header/partner-header.component';
import { ImportCustomerComponent } from './import-customer/import-customer.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { utilityroutingModule } from './utility-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        utilityroutingModule,

        CustomerDataComponent,
        ImportCustomerComponent,
        PartnerHeaderComponent,
        AdditionalPointsComponent,
        BonusPointsComponent,
        InstantRedeemComponent,
        MessagingComponent,
        RefCampaignComponent,


    ],
    declarations: [],
})
export class utilityModule { }