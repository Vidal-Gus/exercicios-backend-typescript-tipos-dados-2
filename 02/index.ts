import { Console } from 'console'
import funcoesBD from '../01/index'
import { stringify } from 'querystring'

// nome
// email
// cpf
// profissao (opcional)
// endereco (caso não seja preenchido, deverá ser nulo)

// A propriedade endereco será um objeto contendo as seguintes propriedades:

// cep
// rua
// complemento (opcional)
// bairro
// cidade

type Endereco = {
    cep: number,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: number,
    profissao?: string,
    endereco: Endereco | null
}

const criarUsuario = (usuario: Usuario): Usuario => {
    const bancoAtual = funcoesBD.lerArquivo('./bd.json') as Usuario[]

    bancoAtual.push(usuario)

    funcoesBD.escreverEmArquivo(JSON.stringify(bancoAtual), './bd.json')

    return usuario
}

const usuarioNulo = {
    nome: "gustavo",
    email: "gustavo@gmail.com",
    cpf: 1923434,
    profissao: "programador",
    endereco: {
        cep: 1287324,
        rua: "Major",
        complemento: "entretenimento",
        bairro: "RJ",
        cidade: "RJ"
    }
}

const listarUsuarios = (): Usuario[] => {
    const bancoAtual = funcoesBD.lerArquivo('./bd.json') as Usuario[];

    return bancoAtual
}

criarUsuario(usuarioNulo);
console.log(listarUsuarios());
