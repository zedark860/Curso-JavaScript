const documentoIdentidade = {
    nome: 'Daniel',
    sobrenome: 'Porto',
    cpf: '111.111.111-11',
    idade: 29,
    time: 'Fluminense',
    brasileiro: true
}

// Acesso dos campos é através de .nomecampo
console.log(documentoIdentidade.nome)
// ou, dessa forma é parecida com Python, porém precisa colocar entre áspas
console.log(documentoIdentidade['cpf'])

// Parecido com dicionário em python, só usar a mesma lógica
// Tipos Referência Object, Array e Function.
// Tipos Primitivos Number, String e Bollean

for (item in documentoIdentidade) {
    console.log(`${item} ${documentoIdentidade[item]}`)
}