import { DrawWinComponent } from './draw-win/draw-win.component';
import { CreateyourdrawComponent } from './createyourdraw/createyourdraw.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createdrawroutingModule } from './createdraw-routing.module';
import { DrawContainerComponent } from './draw-container/draw-container.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        createdrawroutingModule,
        CreateyourdrawComponent,
        DrawWinComponent,
        DrawContainerComponent

    ],
    declarations: [],
})
export class createdrawModule { }