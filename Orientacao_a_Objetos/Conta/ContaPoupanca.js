import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}