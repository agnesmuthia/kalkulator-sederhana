let prevNumber = '';
let currentNumber = '0';
let CalculationOperator = '';
let tampilan = '0';
let calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const btnClear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");

window.onload = () => {
    updateScreen(currentNumber);
};

//Ganti tampilan calculator screen
const updateScreen = (number) =>{
    calculatorScreen.value = number;
};

//Ketika nomer di klik
numbers.forEach((number) => {
    number.addEventListener('click', () =>{
        inputNumber(event.target.value);
        updateScreen(tampilan);
        console.log(event.target.value);
    });
});
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
        if(tampilan === '0') {
            tampilan = number;
        } else {
            tampilan += number;
        }
        //console.log("1");
    } else {
        currentNumber += number;
        //console.log("2");
        tampilan += number;
    }
    
};

//Ketika operator di klik
operators.forEach((operator) =>{
    operator.addEventListener('click', ()=>{
        inputOperator(event.target.value);
        updateScreen(tampilan);
    })
});
const inputOperator = (operator) => {
    if(CalculationOperator === '') {
        prevNumber = currentNumber;
    }
    CalculationOperator = operator;
    currentNumber = '0';
    tampilan += ` ${operator} `;
};

//Ketika = diklik
equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(tampilan);
});
const calculate = () => {
    let result = '';
    switch(CalculationOperator) {
        case "+":
            result = (parseFloat(prevNumber) * 10 + parseFloat(currentNumber) * 10) / 10;
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    CalculationOperator = '';
    tampilan =result;
    prevNumber ='';
};

//Ketika AC di klik
btnClear.addEventListener('click', () => {
    clearAll();
    calculatorScreen.value = currentNumber;
});

const clearAll = () => {
    prevNumber = '';
    currentNumber = '0';
    CalculationOperator = '';
    tampilan='';
};

//Ketika decimal
decimal.addEventListener('click', () => {
    inputDecimal(event.target.value);
    updateScreen(tampilan);
});
const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    };
    currentNumber += dot;
    tampilan += 'dot';
}

//Ketika percentage di klik
percentage.addEventListener('click', () => {
    let result = ''
    result = parseFloat(currentNumber) * 10 /100;
    currentNumber = result;
    tampilan = `${prevNumber} ${CalculationOperator} ${result}`;
    updateScreen(tampilan);
    console.log(result);
});