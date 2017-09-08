import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/home/about-home.component';
import { ResourcesComponent } from './about/resources/resources.component';

export const routes : Routes = [

    {
        path: 'about',
        component: AboutComponent,
        children: [            
            { 
                path: 'resources', // url: about/resources
                component: ResourcesComponent 
            }, 
            { 
                path: '', // url: about/
                component: AboutHomeComponent 
            }, 
        ]
    },    
    { 
        path: '',
        component: HomeComponent
    }
];