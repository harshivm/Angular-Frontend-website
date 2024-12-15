import { emproutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        emproutingModule,
        emproutingModule,

    ],
    declarations: [


    ],
})
export class empModule { }