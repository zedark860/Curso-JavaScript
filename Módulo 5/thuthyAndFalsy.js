const varivelA = false

// para condições booleanas, você pode avaliar apenas variáveis, if só entra com True e False com else
// Para trocar é só colocar o not => !

//if (!varivelA) {
//    console.log('condição verdadeira')
//}
//else {
//    console.log('condição falsa')
//}

// Falsy são valores vazios (0, '', null, undefined, false), menos objects, arrays e functions
// Truthy valores que não são vazios
// Valores parecidos com True e False, pois não são isso, apenas parecidos

const varivelFalsy = '0' // apenas tipo Number, String não
//const varivelFalsy = ''
//const varivelFalsy = null
//const varivelFalsy = undefined

if (!varivelFalsy) {
    console.log('Executei por que a variável continha um valor com cara de falso')
}