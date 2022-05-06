console.log('Trabalhando com condicionais: Sistema de Viagens');

const idade = 14;
let nome = "Fernando";
let acompanhada = true;
let passagem = true;
const listaDestino = new Array(
    'São Paulo',
    ' Rio de Janeiro',
    ' Salvador',
    ' Minas Gerais',
    ' Rio Grande do Sul'
);

// if (idade >= 18) {
//     console.log('Idade verificada');
//     console.log(`Destinos possíveis: ${listaDestino}`);
// } else if(acompanhada == true){
//     console.log(`A pessoa está acompanhada, segue lista de destinos possíveis: ${listaDestino}`);
//     } else{
//     console.log('Idade não permitida, por favor contate um familiar adulto!');
// } 
// Um dos possíveis métodos para se fazer a lógica

if (idade >= 18 || acompanhada == true) {
    console.log(`Destinos possíveis para compra: ${listaDestino}`);
    console.log('Compra realizada com sucesso!');
}else{
    console.log('Idade não permitida, por favor contate um familiar adulto!');
}

console.log('EMBARQUE... \n\n');
console.log(`Olá ${nome}, seja bem vindo, me mostre sua passagem para embarque, por favor.`);

if(passagem == true){
    console.log(`Obrigado(a) ${nome}, verifiquei em meu sistema e está tudo certo com seu embarque, tenha uma ótima viagem!`);
}else{
    console.log(`${nome}, notei que há uma divergência em sua passagem, peço que retorne e verifique em nossa central`);
}
