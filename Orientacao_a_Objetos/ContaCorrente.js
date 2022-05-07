import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static contas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.contas ++
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        } else{
            console.log('Operação não autorizada, valor maior que saldo!')
        }
    }
    depositar(valor){
        if(valor <= 0){ 
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    
    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


}