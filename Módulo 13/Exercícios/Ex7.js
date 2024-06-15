function pegarDadosApi(nomeDoUsuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome : nomeDoUsuario,
                age: Math.floor(80 * Math.random()),
                favorite_programming_language: "Java"
            });
        }, 1000);
    });
}

async function buscarDados(nomeDoUsuario) {
    const resposta = await pegarDadosApi(nomeDoUsuario);
    console.log(resposta);
}

buscarDados("Davi");