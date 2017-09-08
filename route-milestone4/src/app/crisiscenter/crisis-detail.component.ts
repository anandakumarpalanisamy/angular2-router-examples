import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Crisis } from './crisis-center.service';

@Component({
    selector: 'crisis-detail',
    templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent {
    
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(){
        this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });
    }

    cancel(){
        this.gotoCrises();
    }

    save(){
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises(){
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
    }

}