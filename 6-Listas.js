console.log(`Trabalhando com Listas`)

const Salvador = 'Salvador'
const SaoPaulo = 'São Paulo'
const RiodeJaneiro = 'Rio de Janeiro'

const destinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Rio Grande do Sul`
) // Criando uma Array (Lista)

destinos.push(`Curitiba`) // Adicionando um item na lista depois da lista já estar declarada

destinos.splice(1,1) // Removendo itens da lista com parâmetros de (Posição do item na lista, Quantos itens quer apagar)

console.log(destinos)
console.log(destinos[1]) // Mostrando apenas o item da posição 1 da lista