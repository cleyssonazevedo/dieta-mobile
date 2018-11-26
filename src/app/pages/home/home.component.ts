import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, toArray } from 'rxjs/operators';
import { Dieta } from '~/app/models';
import { PratosService } from '~/app/services';

@Component({
    moduleId: module.id,
    selector: 'Home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private data: Array<Dieta>;

    constructor(
        private service: PratosService
    ) { }

    ngOnInit() {
        this.data = this.service.getData();
    }

    get getData() {
        return this.data;
    }
}
