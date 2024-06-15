function procedimento1(outrafuncao) {

    result = outrafuncao();
    console.log(result);
}

function procedimento2() {
    console.log("A função procedimento 2 foi executada");
    return "banana";
}

procedimento1(() => {
    console.log("A função procedimento 2 foi executada");
    return "banana";
}); // não pode colocar com parenteses, pois fica com retorno 