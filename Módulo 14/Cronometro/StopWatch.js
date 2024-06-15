class StopWatch {
  #elaspedTimeInSeconds = 0; // membro da classe privado
  #intervalId = null; // membro da classe privado, pode ser utilizado para atributos e métodos também

  // o callback serve para caso não seja passado nada para a arrow function, além de deixar o usuário utilizar outras funções
  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elaspedTimeInSeconds++;
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elaspedTimeInSeconds = 0;
    callback();
  }

  get elaspedTime() {
    return StopWatch.formatTime(this.#elaspedTimeInSeconds);
  }

  // no formato static você utiliza um método da própria classe e não faz referência ao próprio objeto
  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${StopWatch.zeroPadding(hours)}:${StopWatch.zeroPadding(
      minutes
    )}:${StopWatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmountDigits = 2) {
    let stringNumber = String(originalNumber);
    const zerosRequired = desiredAmountDigits - stringNumber.length;

    if (zerosRequired <= 0) {
      return stringNumber;
    }

    for (let counter = 0; counter < zerosRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const stopwatchDisplay = document.getElementById("stopwatch-display")

function updateDisplay() {
  stopwatchDisplay.innerHTML = sw1.elaspedTime;
}

const sw1 = new StopWatch();

startButton.addEventListener('click', () => {
  sw1.start(updateDisplay);
});

stopButton.addEventListener('click', () => {
  sw1.stop();
});

resetButton.addEventListener('click', () => {
  sw1.reset(updateDisplay);
});