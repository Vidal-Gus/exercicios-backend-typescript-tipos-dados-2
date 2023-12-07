import funcoesDB from "../01";
import Usuario from "../02";

const excluirUsuario = (cpf: number): {} => {
    const bancoAtual = funcoesDB.lerArquivo() as Usuario[];
    const usuarioEncontrado = bancoAtual.find((usuario) => usuario.cpf === cpf);

    if (!usuarioEncontrado) {
        return { mensagem: "Usuario não enconrado!" }
    }

    bancoAtual.splice(bancoAtual.indexOf(usuarioEncontrado), 1);

    funcoesDB.escreverEmArquivo(bancoAtual);

    return usuarioEncontrado;
}

console.log(excluirUsuario(333));
