//Selecionando Contador
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const miliseconds = document.querySelector(".miliseconds");
//Selecionando Botões 
const buttonStart = document.querySelector(".button-start");
const buttonPause = document.querySelector(".button-pause");
const buttonResume = document.querySelector(".button-resume");
const buttonReset = document.querySelector(".button-reset");

//Criando Variaveis
let interval;
let minutesCount = 0;
let secondsCount = 0;
let milisecondsCount = 0;
let isPaused = false;

//Criando Start ao clicar no botão
buttonStart.addEventListener('click', () => {
    timerCount();
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'inline-block';
})

buttonPause.addEventListener('click', () => {
    isPaused = true;
    clearInterval(interval);
    buttonPause.style.display = 'none';
    buttonResume.style.display = 'inline-block';
})

buttonResume.addEventListener('click', () => {
    isPaused = false;
    timerCount();
    buttonResume.style.display = 'none';
    buttonPause.style.display = 'inline-block';
})

buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    minutesCount = 0;
    secondsCount = 0;
    milisecondsCount = 0;
    isPaused = false;

    miliseconds.textContent = "00";
    seconds.textContent = "00";
    minutes.textContent = "00";

    buttonStart.style.display = 'inline-block';
    buttonPause.style.display = 'none';
    buttonResume.style.display = 'none';
})

function timerCount() {
    clearInterval(interval);
    interval = setInterval(() => {
        if (!isPaused) {
            milisecondsCount += 10;

            if (milisecondsCount == 1000) {
                milisecondsCount = 0;
                secondsCount++
            }
            if (secondsCount == 60) {
                secondsCount = 0;
                minutesCount++
            };

            miliseconds.textContent = formatTime(milisecondsCount);
            seconds.textContent = formatTime(secondsCount);
            minutes.textContent = formatTime(minutesCount);
        }

    }, 10)
}

function formatTime(timer) {
    return timer < 10 ? `0${timer}` : timer;
}