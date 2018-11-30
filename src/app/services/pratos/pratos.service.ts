import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { defaultIfEmpty, filter, mapTo, reduce } from 'rxjs/operators';
import { Dieta } from '~/app/models';
import { Prato } from './pratos.model';

@Injectable()
export class PratosService {
    private dieta: ReplaySubject<Dieta>;
    private data: Array<Dieta>;
    private _lastId: any;

    constructor() {
        this.data = [];
        this.dieta = new ReplaySubject();
    }

    setData(item: Dieta) {
        this.data.push(item);
    }

    get lastId() {
        return this._lastId;
    }

    getData() {
        return this.data;
    }

    getListPratos() {
        return [
            {
                nome: 'Arroz e feijão (100g)',
                calorias: 151
            },
            {
                nome: 'Batata frita (100g)',
                calorias: 312
            },
            {
                nome: 'Espaguete',
                calorias: 158
            },
            {
                nome: 'Macarrão com molho à bolonhesa',
                calorias: 151
            },
            {
                nome: 'Miojo',
                calorias: 412
            },
            {
                nome: 'Pizza',
                calorias: 266
            }
        ] as Array<Prato>;
    }

    getNomesListPratos() {
        return this.getListPratos().map((prato) => prato.nome);
    }

    saveItem(dieta: Dieta) {
        this.dieta.next(dieta);
        return this.dieta.asObservable();
    }

    getDieta(
        domingo: boolean = true,
        segunda: boolean = true,
        terca: boolean = true,
        quarta: boolean = true,
        quinta: boolean = true,
        sexta: boolean = true,
        sabado: boolean = true
    ) {
        return this.dieta.asObservable()
            .pipe(
                filter((item) =>
                    item.domingo === domingo ||
                    item.segunda === segunda ||
                    item.terca === terca ||
                    item.quarta === quarta ||
                    item.quinta === quinta ||
                    item.sexta === sexta ||
                    item.sabado === sabado
                )
            );
    }

    getTotalCalorias(
        domingo: boolean = true,
        segunda: boolean = true,
        terca: boolean = true,
        quarta: boolean = true,
        quinta: boolean = true,
        sexta: boolean = true,
        sabado: boolean = true
    ) {
        return this.getDieta(
            domingo,
            segunda,
            terca,
            quarta,
            quinta,
            sexta,
            sabado
        ).pipe(mapTo(0));
         /*    .pipe(filter((data) => !!data))
            .pipe(reduce((total, value: Dieta) => total + (value.quantidade * value.calorias), 0))
            .pipe(defaultIfEmpty(0)); */
    }
}
