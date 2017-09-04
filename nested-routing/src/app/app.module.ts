import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/home/about-home.component';
import { ResourcesComponent } from './about/resources/resources.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AboutHomeComponent,
        ResourcesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        MdToolbarModule,
        MdCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
