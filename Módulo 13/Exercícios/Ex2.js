const path = require('path');
const fs = require('fs');

function lerArquivo(filename, callback) {

    const caminhoAbsoluto = path.resolve(__dirname, filename);

    fs.readFile(caminhoAbsoluto, "utf-8", (err, data) => {
        if (err) {
            console.log("Erro ao ler arquivo" + err);
            return;
        }
        callback(data);
       });
}

lerArquivo("textoExercicio2.txt", (data) => {
    console.log("Conteúdo do arquivo:");
    console.log(data)
})