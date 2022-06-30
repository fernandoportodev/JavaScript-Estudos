// declaração de função

function minhaFuncao(param){
    //bloco de código
}
minhaFuncao("param");

// expressão de função

let soma = function(num1, num2){
    return num1 + num2;
}

// console.log(soma(1, 2))

// diferença entre expressão x declarão de função : HOISTING
// funções e var são "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "Olá";
}

console.log(multiplicacao(6, 5))

//é identificado que é uma variável
let multiplicacao = function(num1, num2){
    return num1 * num2;
}
