//variaveis

//var = pode ser declarada depois de utiliza-lá

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// let = apenas consegue utiliza-lá depois que declarar

// let forma = 'Retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'Retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }
// console.log(area);

// const = "constante" não é possível alterar seus dados depois de declarar o valor e precisa sempre ser declarada

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);