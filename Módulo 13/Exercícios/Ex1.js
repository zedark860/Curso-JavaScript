
function imprimirMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

imprimirMensagem("Mensagem teste", () => {
    console.log("Essa mensagem será exibida após a mensagem teste")
});