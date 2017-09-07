import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Crisis, CrisisService } from './crisis-center.service';

@Component({
    selector: 'crisis-list',
    templateUrl: './crisis-list.component.html'
})
export class CrisisListComponent {
    crises$: Observable<Crisis[]>;
    selectedId: number;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.crises$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getCrises();
            });
    }
}