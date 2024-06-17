// import { selectBestCountry as bestCountry } from "./escopoGlobalModular2.js";

function addFiveNumbers(number1, number2, number3, number4, number5) {
    return number1 + number2 + number3 + number4 + number5;
}

function selectBestCountry() {
    return "Brasil";
}

// console.log(global);

// global.console.log("Teste");

addFiveNumbers(1, 2, 3, 4, 5);

const path = require("node:path");

const pathObj = path.parse(module.filename);

console.log(pathObj)

// Import através do CommonJs
// const script3 = require("./escopoGlobalModular2");
// console.log(script3.bestCountry);

// console.log(bestCountry());

