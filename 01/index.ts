import fs from 'fs';

const lerArquivo = (path: string): unknown => {

    const dadosArquivo = fs.readFileSync(path);

    return JSON.parse(dadosArquivo.toString());
}

const escreverEmArquivo = (data: any, path: string) => {
    fs.writeFileSync(path, data);

}

// console.log(lerArquivo('./bd.json'));
// escreverEmArquivo('Teste de escrita', './bd.json');
// console.log(lerArquivo('./bd.json'));

export = { escreverEmArquivo, lerArquivo }