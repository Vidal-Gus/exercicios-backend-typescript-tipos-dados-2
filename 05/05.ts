import Usuario from "../02";
import funcoesBD from "../01"


const listarUsuarios = (filtro?: string): Usuario[] => {
    const bancoAtual = funcoesBD.lerArquivo() as Usuario[];

    if (filtro) {
        const bancoFiltrado = bancoAtual.filter((usuario) => usuario.profissao === filtro);

        return bancoFiltrado
    }

    return bancoAtual
}

console.log(listarUsuarios("programador"));
