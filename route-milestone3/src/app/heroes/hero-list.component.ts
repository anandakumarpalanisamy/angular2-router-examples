import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero-service';
import { Hero } from './hero';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent {

    heroes$: Observable<Hero[]>

    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) {}

    ngOnInit(){
        this.heroes$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getHeroes();
            });
    }

}