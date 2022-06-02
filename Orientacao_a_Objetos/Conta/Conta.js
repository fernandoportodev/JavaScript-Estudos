//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instaciar um objeto do tipo Conta, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    sacar(valor){
        throw new Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } else{
            console.log('Operação não autorizada, valor maior que saldo!');
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