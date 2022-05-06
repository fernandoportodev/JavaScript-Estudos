// const Livro = function (nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }

//     this.getEditora = function(){
//         return gEditora
//     }

//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143)

// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

/////////////

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} que possui ${this.paginas} páginas`)
    }
}

const NodeJS = new Livro('Primeiros passos com NodeJS', 'Casa do Código', 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

class LivroColecao extends Livro{
    constructor(nome, editora, nomeColecao){
        super(nome, editora)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao} da editora ${this.editora}`)
    }
}

const LogicaDeProgramacao = new LivroColecao('Lógica de Programação', 'Casa do Código', 'Comece a Programar')
LogicaDeProgramacao.descreverColecao()