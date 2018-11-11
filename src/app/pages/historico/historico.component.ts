import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'Historico',
    templateUrl: './historico.component.html'
})
export class HistoricoComponent {
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
