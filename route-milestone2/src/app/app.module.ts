import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisListComponent } from './crisiscenter/crisis-center.component';
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
    declarations: [
        AppComponent,
        HeroListComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
