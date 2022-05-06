console.log('\nTrabalhando com While')

const idade = 14;
let nome = "Fernando";
let acompanhada = true;
let passagem = false;
let destino = 'Rio de Janeiro'
const listaDestino = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Minas Gerais`,
    `Rio Grande do Sul`
);

let destinoExiste = false;
let contador = 0;

while(contador < 5){
    if(listaDestino[contador] == destino){
        console.log(`Destino ${destino} possui vagas`);
        destinoExiste = true;
        break;
    }
    contador++;
}

let compra = false;
if (idade >= 18 || acompanhada == true) {
    console.log(`Destino possível para compra, deseja realizar a compra?`);
    console.log('Compra realizada com sucesso!');
    compra = true;
}else{
    console.log('Idade não permitida, por favor contate um familiar adulto!');
}

if (compra == true) {
    console.log('\nTenha uma ótima viagem!')
} else {
    console.log('Muito obrigado mesmo assim, espero te ver em breve!')
}

