export class Dieta {
    prato: string;
    quantidade: number;

    constructor(prato: string = '', quantidade: number = 1) {
        this.prato = prato;
        this.quantidade = quantidade;
    }
}
