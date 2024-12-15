import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefCampaignComponent } from './ref-campaign/ref-campaign.component';
import { MessagingComponent } from './messaging/messaging.component';
import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { BonusPointsComponent } from './bonus-points/bonus-points.component';
import { AdditionalPointsComponent } from './additional-points/additional-points.component';
import { PartnerHeaderComponent } from './partner-header/partner-header.component';
import { ImportCustomerComponent } from './import-customer/import-customer.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

const routes: Routes = [
    {
        path: '',
        data:
        {
            title: 'utility',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },

            {
                path: 'utility_msg',
                component: MessagingComponent,
                data: {
                    title: 'utility_msg',
                },
            },
            {
                path: 'download_cus_data',
                component: CustomerDataComponent,
                data: {
                    title: 'download_cus_data',
                },
            },
            {
                path: 'create_refcamp',
                component: RefCampaignComponent,
                data: {
                    title: 'create_refcamp',
                },
            },
            {
                path: 'p_apphandler',
                component: PartnerHeaderComponent,
                data: {
                    title: 'p_apphandler',
                },
            },
            {
                path: 'set_add_bonus_pnts',
                component: AdditionalPointsComponent,
                data: {
                    title: 'set_add_bonus_pnts',
                },
            },
            {
                path: 'set_bonus_pnts',
                component: BonusPointsComponent,
                data: {
                    title: 'set_bonus_pnts',
                },
            },
            {
                path: 'utility_ins_redem',
                component: InstantRedeemComponent,
                data: {
                    title: 'utility_ins_redem',
                },
            },
            {
                path: 'import_cus',
                component: ImportCustomerComponent,
                data: {
                    title: 'import_cus',
                },
            },

        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class utilityroutingModule { }