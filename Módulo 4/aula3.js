function calcularRaizQuadrada(base) {
    return base ** (1 / 2);
}

function resolverBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);

    console.log(`O valor de x1 é ${x1} e de x2 é ${x2}`)
}

resolverBhaskara(2, 3, -2)
