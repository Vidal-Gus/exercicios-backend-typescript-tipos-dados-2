import fs from 'fs';

const lerArquivo = (): unknown => {

    const dadosArquivo = fs.readFileSync('./bd.json');

    return JSON.parse(dadosArquivo.toString());
}

const escreverEmArquivo = (data: any) => {
    fs.writeFileSync('./bd.json', JSON.stringify(data));

}

// console.log(lerArquivo('./bd.json'));
// escreverEmArquivo('Teste de escrita', './bd.json');
// console.log(lerArquivo('./bd.json'));

export = { escreverEmArquivo, lerArquivo }