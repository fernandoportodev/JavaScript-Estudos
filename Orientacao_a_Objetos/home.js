import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";



const cliente1 = new Cliente("Fernando", 12345678900);
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);


const cliente2 = new Cliente("Julia", 98765432111);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);


contaCorrenteCliente1.depositar(200);
contaCorrenteCliente1.transferir(200, contaCorrenteCliente2)





console.log(ContaCorrente);