function calculateSquareRoot(radicand) {
  if (radicand < 0) {
    throw new Error("O radicando deve ser real e positivo");
  }
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  try {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
  } catch (error) {
    console.log(error);
  }
}

const firstSideRef = document.getElementById("side-1");
const secondSideRef = document.getElementById("side-2");
const calculateButton = document.getElementById("calculate-hypotenuse");
const answerDiv = document.getElementById("answer");

function onCalculateButtonClick() {
  try {
    console.log('Estabelecendo conexão com o Banco de Dados')
    const firstSide = Number(firstSideRef.value);
    const secondSide = Number(secondSideRef.value);
    if (
      isNaN(firstSide) ||
      isNaN(secondSide) ||
      firstSide <= 0 ||
      secondSide <= 0
    ) {
      throw new Error(
        "Entradas inválidas. Os tamanhos dos catetos devem ser fornecidos, e seus valores devem ser números positivos exclusivamente"
      );
    }

    answerDiv.classList.remove("hidden-element");
    answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
      firstSide,
      secondSide
    )
      .toFixed(3)
      .replace(/[.,]000$/, "")}
      <div class="left-point"></div>`;
      console.log('operação com o Banco de Dados bem sucedida')
  } catch (error) {
    console.log(error);
    console.log('operação com o Banco de Dados não foi bem sucedida')
  } finally {
    console.log("Encerrando conexão com Banco de Dados")
    console.log("Volte Sempre!")
  }
}

calculateButton.addEventListener("click", onCalculateButtonClick);
