import { CreateyourdrawComponent } from './createyourdraw/createyourdraw.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawContainerComponent } from './draw-container/draw-container.component';
import { DrawWinComponent } from './draw-win/draw-win.component';
const routes: Routes = [
    {
        path: '',
        component: DrawContainerComponent,
        data:
        {
            title: 'Createdraw',
        },
        children: [
            {
                path: 'create_your_draw',
                component: CreateyourdrawComponent,
                data: {
                    title: 'create_your_draw',
                },
            },
            {
                path: 'draw_win',
                component: DrawWinComponent,
                data: {
                    title: 'draw_win',
                },
            },

        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class createdrawroutingModule { }