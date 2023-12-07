import Usuario from "../02"
import funcoesBD from "../01"

const atualizarUsuario = (cpf: number, usuario: Usuario): {} => {
    const bancoAtual = funcoesBD.lerArquivo() as Usuario[];

    const usuarioEncontrado: number = bancoAtual.findIndex((user) => user.cpf === cpf);

    if (usuarioEncontrado === -1) {
        return { mensagem: "Usuario não encontrado" }
    }

    bancoAtual.splice(usuarioEncontrado, 1, usuario);

    funcoesBD.escreverEmArquivo(bancoAtual);

    return usuario
}

const usuarioTeste = {
    nome: "vidal",
    email: "vidal@gmail.com",
    cpf: 55555,
    profissao: "programador",
    endereco: null
}

const detalharUsuario = (cpf: number): {} => {
    const bancoAtual = funcoesBD.lerArquivo() as Usuario[];

    const usuarioEncontrado: {} | undefined = bancoAtual.find((user) => user.cpf === cpf);

    if (!usuarioEncontrado) {
        return { mensagem: "Usuario não encontrado" }
    }

    return usuarioEncontrado;
}

console.log(detalharUsuario(333));
console.log(atualizarUsuario(333, usuarioTeste));
