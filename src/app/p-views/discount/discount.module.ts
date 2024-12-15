import { ReportsComponent } from './../../views/reports/reports.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCampComponent } from './create-camp/create-camp.component'
import { discountroutingModule } from './discount-routing.module';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        discountroutingModule,
        CreateCampComponent,
        ReportsComponent,
    ],
    declarations: [],
})
export class discountModule { }