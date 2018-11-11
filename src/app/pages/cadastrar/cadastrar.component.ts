import { Component, OnInit } from '@angular/core';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Dieta } from '~/app/models';
import { PratosService } from '~/app/services';

@Component({
    moduleId: module.id,
    selector: 'Cadastrar',
    templateUrl: './cadastrar.component.html'
})
export class CadastrarComponent implements OnInit {
    diasDaSemana: ObservableArray<TokenModel>;
    cadastro: Dieta;

    constructor(
        private pratos: PratosService
    ) {
        // this.initDataItems();
    }

    ngOnInit() {
        this.cadastro = new Dieta();
    }

    private initDataItems() {
        this.diasDaSemana = new ObservableArray<TokenModel>();
        this.diasDaSemana.push(...
            [
                'Domingo',
                'Segunda',
                'Terça',
                'Quarta',
                'Quinta',
                'Sexta',
                'Sábado'
            ].map((dia) => new TokenModel(dia, undefined))
        );
    }

    get getPratos() {
        return this.pratos.getNomesListPratos();
    }
}
