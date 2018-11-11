import { Injectable } from '@angular/core';
import { Prato } from './pratos.model';

@Injectable()
export class PratosService {
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
}
