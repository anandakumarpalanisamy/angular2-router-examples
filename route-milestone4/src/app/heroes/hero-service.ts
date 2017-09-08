import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { HEROES } from './hero';

@Injectable()
export class HeroService {
    
    public getHeroes(){
        return Observable.of(HEROES);
    }

    public getHero(id: number | string){
        return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === +id));
    }
}