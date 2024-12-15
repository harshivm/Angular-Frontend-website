import { ReportsComponent } from './../../views/reports/reports.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCampComponent } from './create-camp/create-camp.component'
const routes: Routes = [
    {
        path: '',
        data:
        {
            title: 'discount',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },

            {
                path: 'create_camp',
                component: CreateCampComponent,
                data: {
                    title: 'create_camp',
                },
            },
            {
                path: 'reports',
                component: ReportsComponent,
                data: {
                    title: 'reports',
                },
            },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class discountroutingModule { }
