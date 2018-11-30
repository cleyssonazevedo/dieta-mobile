import { Component, OnInit } from '@angular/core';
import { TokenModel } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Dieta } from '~/app/models';
import { PratosService } from '~/app/services';

import { tap } from 'rxjs/operators';
import * as dialogs from 'tns-core-modules/ui/dialogs';

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

    save() {
        if (!!this.cadastro.prato) {
            this.cadastro.prato = this.getPratos[0];
        }

        if (
            this.cadastro &&
           this.cadastro.quantidade > 0 &&
           (
               this.cadastro.domingo ||
               this.cadastro.segunda ||
               this.cadastro.terca ||
               this.cadastro.quarta ||
               this.cadastro.quinta ||
               this.cadastro.sexta ||
               this.cadastro.sabado
            )
        ) {
            this.cadastro.calorias = this.pratos.getListPratos()
                .find((prato) => prato.nome === this.cadastro.prato)
                .calorias;

            this.pratos.saveItem(this.cadastro)
                .pipe(tap(() => console.log('Dados Salvos')))
                .subscribe(() => {
                    dialogs.alert({
                        message: 'Dados Salvos'
                    }).then(() => {
                        const cadastro = this.cadastro;
                        cadastro.calorias = 0;
                        cadastro.prato = '';
                        cadastro.quantidade = 0;

                        cadastro.domingo = false;
                        cadastro.segunda = false;
                        cadastro.terca = false;
                        cadastro.quarta = false;
                        cadastro.quinta = false;
                        cadastro.sexta = false;
                        cadastro.sabado = false;
                    });
                });
        } else {
            dialogs.alert({
                title: 'Falha ao salvar dados',
                message: 'Dados não salvos pois requerem os campos de nome do prato e quantidade'
            });
        }
    }
}
