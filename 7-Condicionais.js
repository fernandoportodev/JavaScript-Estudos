console.log('Trabalhando com condicionais: Sistema de viagens');

const idade = 14;
let acompanhada = true;
const listaDestino = new Array(
    'São Paulo',
    ' Rio de Janeiro',
    ' Salvador',
    ' Minas Gerais',
    ' Rio Grande do Sul'
);

if (idade >= 18) {
    console.log('Idade verificada');
    console.log(`Destinos possíveis: ${listaDestino}`);
} else if(acompanhada == true){
    console.log(`A pessoa está acompanhada, segue lista de destinos possíveis: ${listaDestino}`);
} else{
    console.log('Idade não permitida, por favor contate um familiar adulto!');
}
