import "./main.scss";

let num1 = "";
let operator = "";
let num2 = "";
let result = "";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const pointButton = document.querySelector(".point-button");
const equalsButton = document.querySelector(".equals-button");
const calculatorScreen = document.querySelector<HTMLHeadElement>(".calculator__grid-screen");

if (
  !numberButtons ||
  !operatorButtons ||
  !clearButton ||
  !pointButton ||
  !equalsButton ||
  !calculatorScreen
) {
  throw new Error("Issue with button");
}

const handleClickNumber = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;
  if (!operator) {
    num1 += button.innerText
  } else {
    num2 += button.innerText
  }
};

numberButtons.forEach((button) => {
  button.addEventListener("click", handleClickNumber);
});

// ADD
const handleAdd = (num1 : number, num2 : number) => {
  const sum = num1 + num2
  return sum
}

// SUBTRACT
const handleSubtract = (num1 : number, num2 : number) => {
  const sum = num1 - num2
  return sum
}

// MULTIPLY
const handleMultiply = (num1 : number, num2 : number) => {
  const sum = num1 * num2
  return sum
}

// DIVIDE
const handleDivide = (num1 : number, num2 : number) => {
  const sum = num1 / num2
  return sum
}


// EQUALS



const handleClickOperator = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;

};

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleClickOperator);
});

const handleClickClear = (event: Event) => {
  calculatorScreen.innerText = "";
};

clearButton.addEventListener("click", handleClickClear);

const handleClickPoint = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;
};

pointButton.addEventListener("click", handleClickPoint);
