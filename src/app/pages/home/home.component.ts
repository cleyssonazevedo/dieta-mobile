import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PratosService } from '~/app/services';

// tslint:disable-next-line:ban-types
declare var zonedCallback: Function;

@Component({
    moduleId: module.id,
    selector: 'Home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    data: number;
    constructor(
        public service: PratosService
    ) { }

    ngOnInit() {
        this.Teste.subscribe((data) => {
            zonedCallback(() => {
                this.data = data;
            });
        });
    }

    get getTotal() {
        return this.service.getTotalCalorias()
            .pipe(
                tap((total) => console.log('Retornou', total))
            );
    }

    get Teste() {
        return interval(1000);
    }
}
