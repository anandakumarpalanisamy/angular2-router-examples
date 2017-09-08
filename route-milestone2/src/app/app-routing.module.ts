import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisiscenter/crisis-center.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { 
        path: 'crisis-center',
        component: CrisisListComponent
    },
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}