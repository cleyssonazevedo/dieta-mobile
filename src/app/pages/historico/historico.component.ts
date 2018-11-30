import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'nativescript-ui-calendar';
import { tap } from 'rxjs/operators';
import { PratosService } from '~/app/services';

@Component({
    moduleId: module.id,
    selector: 'Historico',
    templateUrl: './historico.component.html'
})
export class HistoricoComponent implements OnInit {
    events: Array<CalendarEvent>;

    constructor(
        private service: PratosService
    ) {
        this.events = [];
    }

    ngOnInit() {
        this.service.getDieta()
            .pipe((tap((data) => {
                if (data.domingo) {
                    this.events.push(
                        new CalendarEvent(
                            data.prato,
                            new Date(),
                            null,
                            true)
                    );
                }
            })))
            .subscribe();
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    onDateSelected(args) {
        console.log('onDateSelected: ' + args.date);
    }

    onDateDeselected(args) {
        console.log('onDateDeselected: ' + args.date);
    }

    onNavigatedToDate(args) {
        console.log('onNavigatedToDate: ' + args.date);
    }

    onNavigatingToDateStarted(args) {
        console.log('onNavigatingToDateStarted: ' + args.date);
    }

    onViewModeChanged(args) {
        console.log('onViewModeChanged: ' + args.newValue);
    }
}

enum Week {
    DOMINGO = 'Sunday',
    SEGUNDA = 'Monday',
    TERCA = 'Tuesday',
    QUARTA = 'Wednesday',
    QUINTA = 'Thursday',
    SEXTA = 'Friday',
    SABADO = 'Saturday'
}
