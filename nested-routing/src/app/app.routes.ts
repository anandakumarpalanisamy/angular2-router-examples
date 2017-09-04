import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/home/about-home.component';
import { ResourcesComponent } from './about/resources/resources.component';

export const routes : Routes = [

    { 
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            { 
                path: '', // url: about/
                component: AboutHomeComponent 
            }, 
            { 
                path: 'resources', // url: about/resources
                component: ResourcesComponent 
            } 
        ]
    }
];