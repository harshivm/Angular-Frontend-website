import { InstantRedeemComponent } from './../../views/instant-redeem/instant-redeem.component';
import { CheckInstantRedemptionComponent } from './check-instant-redemption/check-instant-redemption.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignPointsComponent } from './assign-points/assign-points.component';
// import { P2Component } from './p2/p2.component'
const routes: Routes = [
    {
        path: '',
        data:
        {
            title: 'transaction',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },

            {
                path: 'assign_points',
                component: AssignPointsComponent,
                data: {
                    title: 'assign_points',
                },
            },
            {
                path: 'ins_redem',
                component: InstantRedeemComponent,
                data: {
                    title: 'ins_redem',
                },
            },
            {
                path: 'chk_ins_redem',
                component: CheckInstantRedemptionComponent,
                data: {
                    title: 'chk_ins_redem',
                },
            },
            // {
            //     path: 'p2',
            //     component: P2Component,
            //     data: {
            //         title: 'p2',
            //     },
            // },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class transactionroutingModule { }