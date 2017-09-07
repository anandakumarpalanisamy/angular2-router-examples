import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisDetailResolver } from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
    {
        path: '',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent,
                        resolve: {
                            crisis: CrisisDetailResolver
                        }
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CrisisDetailResolver
    ]
})
export class CrisisCenterRoutingModule {}