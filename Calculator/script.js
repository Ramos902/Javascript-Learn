const resultDiv = document.querySelector(".result");
const buttons = document.querySelectorAll("button")

let currentNumber = "";
let previousNumber = "";
let operator = "";

//Adiciona Listener nos Numeros
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value)) {
            // Se for número
            updateNumber(value);
        } else if (value === 'C') {
            // Limpa
            clearDisplay();
        } else if (value === '=') {
            // Calcula o resultado
            calculate(Number(previousNumber), Number(currentNumber));
        } else {
            // Operadores
            handleOperator(value);
        }
    });
});

//Atualiza display
function updateDisplay(value){
    resultDiv.textContent = Number(value);
    
}

function updateNumber(num){
    currentNumber += String(num);
    updateDisplay(currentNumber);
}

//Clear Display
function clearDisplay(){
    currentNumber = 0;
    previousNumber = 0;
    operator = "";
    updateDisplay(0);
    console.log("Clear Display |",currentNumber,"|",previousNumber,"|", operator);
}

//Altera o Operador
function handleOperator(value){
    if(value == ","){
        currentNumber += ".";
        updateDisplay(currentNumber);
    }else{
        operator = value;
        previousNumber = currentNumber;
        currentNumber = "";
        updateDisplay(0);
    }
    console.log("Handle Operator |",currentNumber,"|",previousNumber,"|", operator);
}


function calculate(num1, num2){
    console.log("Handle Operator |",num1,"|",num2,"|", operator);
    switch(operator){
        case "%":
            currentNumber = num1 % num2;
            updateDisplay(currentNumber);
            break; 
        case "÷":
            currentNumber = num1 / num2;
            updateDisplay(currentNumber);
            break;
        case "x":
            currentNumber = num1 * num2;
            updateDisplay(currentNumber);
            break;
        case "-":
            currentNumber = num1 - num2;
            updateDisplay(currentNumber);
            break;
        case "+":
            currentNumber = num1 + num2;
            updateDisplay(currentNumber);
            break;
    }
}