import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/switchMap'

import { HeroService } from './hero-service';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {

    hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) {}

    ngOnInit(){
        this.hero$ = this.route.paramMap
                        .switchMap((params: ParamMap) => 
                            this.service.getHero(params.get('id')));
    }

    gotoHeroes(hero: Hero){
        let heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: heroId }]);
    }
}