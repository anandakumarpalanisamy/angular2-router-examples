import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MdToolbarModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisListComponent } from './crisiscenter/crisis-center.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroListComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MdToolbarModule,
        MdChipsModule,
        MdButtonModule,
        MdCardModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
