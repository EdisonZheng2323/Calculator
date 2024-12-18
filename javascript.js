let display = '0';
let num1 = 0;
let num2 = 0;
let operatorSymbol = '';
let operatorPressed = false;
let num2Pressed = false;
function add(num1, num2){
  return +num1 + +num2;
}

function subtract(num1, num2){
  return +num1 - +num2;
} 

function multiply(num1, num2){
  let number = +num1 * +num2;
  return number;
}

function divide(num1, num2){
  let number = +num1/ +num2;
  return number;
}

function operate(num1, num2, operator){
  if(operator == '+'){
    return add(num1, num2);
  }
  else if(operator == '-'){
    return subtract(num1, num2);
  }
  else if(operator == '*'){
    return multiply(num1, num2);
  }
  else{
    return divide(num1, num2);
  }
}

function changeDisplay(number){
  let currentNumber = document.querySelector(".display");
  number = +number;
  if(number == NaN || number > 999999999){
    num1 = NaN;
    currentNumber.textContent = "NaN";
  }
  else{
    currentNumber.textContent = `${number}`;
  }
}


function changeSign(num){
  let number = +num;
  number = number * -1;
  num1 = number;
}

function percentage(num){
  let number = +num;
  number = number/100;
  num1 = number.toExponential(2);

}
let digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
digit.addEventListener("click", () => {
  if(!operatorPressed){
    num = num1;
  }
  else{
    num = num2;
    num2Pressed = true;
  }
  if(num < 100000000){
    num = num + digit.getAttribute("id");
    if(!operatorPressed){
      num1 = num;
    }
    else{
      num2 = num;
    }
  }
  changeDisplay(num);
})
});

let operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let currentSymbol = operator.getAttribute("id");
    if(!operatorPressed){
      operatorSymbol = currentSymbol;
      operatorPressed = true;
    }
  })
})

let equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
  if(num1 == NaN){
    changeDisplay(num1);
  }
  if(operatorPressed && num2Pressed){
    let total = operate(num1, num2, operatorSymbol);
    num1 = total;
    num2 = 0;
    changeDisplay(total);
    operatorPressed = false;

  }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operatorPressed = false;
  operatorSymbol = '';
  num2Pressed = false;
  changeDisplay(0);
})

let sign = document.querySelector(".sign");
sign.addEventListener("click", () => {
  changeSign(num1);
  changeDisplay(num1);
});

let percent = document.querySelector(".percentage");
percent.addEventListener("click", () => {
  percentage(num1);
  changeDisplay(num1);
});










