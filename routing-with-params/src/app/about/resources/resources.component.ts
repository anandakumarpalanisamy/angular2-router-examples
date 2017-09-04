import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about-resources',
    templateUrl: './resources.component.html',
    styleUrls: [ './resources.component.css' ]
})
export class ResourcesComponent {

    id: any;
    paramsSub: any;

    constructor(private activatedRoute: ActivatedRoute){

    }

    ngOnInit(){
        this.paramsSub = this.activatedRoute.params.subscribe(
            params => this.id = parseInt(params['id'])
        );
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }
}