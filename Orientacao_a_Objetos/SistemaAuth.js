/*
Ser autenticavel significa ter o método autenticar

Ducky type = 
*/

export class SistemaAuth{
    static login(autenticador, senha){
        if(SistemaAuth.autenticavel(autenticador)){
            return autenticador.autenticar(senha);
        }
        return false;
    }

    static autenticavel(autenticador){
        return "autenticar" in autenticador && autenticador.autenticar instanceof Function
    }
}