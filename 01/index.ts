import fs from 'fs';

const lerArquivo = (path: string): string => {

    const dadosArquivo = fs.readFileSync(path);
    // console.log(dadosArquivo.toString());

    return dadosArquivo.toString();
}

const escreverEmArquivo = (data: string, path: string) => {

    fs.writeFileSync(path, data);

}

console.log(lerArquivo('./bd.json'));
escreverEmArquivo('Teste de escrita', './bd.json');
console.log(lerArquivo('./bd.json'));
