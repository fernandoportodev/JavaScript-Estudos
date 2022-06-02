import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAuth } from "./SistemaAuth.js";

const diretor = new Diretor("Fernando", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Julia", 15000, 12345678901);
gerente.cadastrarSenha("123456")

const cliente = new Cliente("Luiz", 12345678900, "654")
const diretorLogado = SistemaAuth.login(diretor, "123456789");
const gerenteLogado = SistemaAuth.login(gerente, "123456");
const clienteLogado = SistemaAuth.login(cliente, "654");

console.log(clienteLogado);
