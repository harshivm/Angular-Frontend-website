import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { CheckInstantRedemptionComponent } from './check-instant-redemption/check-instant-redemption.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignPointsComponent } from './assign-points/assign-points.component';

import { transactionroutingModule } from './transaction-routing.module';
@NgModule({
    imports: [
        CommonModule,
        transactionroutingModule,
        ReactiveFormsModule,
        AssignPointsComponent,
        CheckInstantRedemptionComponent,
        InstantRedeemComponent,
    ],

    declarations: [],

})
export class transactionModule { }