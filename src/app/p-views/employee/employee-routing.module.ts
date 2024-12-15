import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        data:
        {
            title: 'employee',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cards',
            },

            {
                path: 'emp_master',
                component: EmployeeMasterComponent,
                data: {
                    title: 'emp_master',
                },
            },
            // {
            //     path: 'reports',
            //     component: ReportsComponent,
            //     data: {
            //         title: 'reports',
            //     },
            // },
            // {
            //     path: 'p11',
            //     component: P11Component,
            //     data: {
            //         title: 'p11',
            //     },
            // },
        ],
    },

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class emproutingModule{}