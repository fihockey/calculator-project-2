import "./main.scss";
import confetti, { Options } from "canvas-confetti";

let num1 = "";
let operator = "";
let num2 = "";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const pointButton = document.querySelector(".point-button");
const equalsButton = document.querySelector(".equals-button");
const calculatorScreen = document.querySelector<HTMLHeadElement>(
  ".calculator__grid-screen"
);
const smileButton = document.querySelector(".smile-button");

if (
  !numberButtons ||
  !operatorButtons ||
  !clearButton ||
  !pointButton ||
  !equalsButton ||
  !calculatorScreen ||
  !smileButton
) {
  throw new Error("Issue with button");
}

const handleClickNumber = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;
  if (!operator) {
    num1 += button.innerText;
  } else {
    num2 += button.innerText;
  }
};

// ADD
const handleAdd = (num1: number, num2: number) => {
  const sum = num1 + num2;
  return sum;
};

// SUBTRACT
const handleSubtract = (num1: number, num2: number) => {
  const sum = num1 - num2;
  return sum;
};

// MULTIPLY
const handleMultiply = (num1: number, num2: number) => {
  const sum = num1 * num2;
  return sum;
};

// DIVIDE
const handleDivide = (num1: number, num2: number) => {
  const sum = num1 / num2;
  return sum;
};

// EQUALS
const handleEquals = () => {
  if (operator === "+") {
    const result = handleAdd(Number(num1), Number(num2));
    calculatorScreen.innerText = `${result}`;
  } else if (operator === "-") {
    const result = handleSubtract(Number(num1), Number(num2));
    calculatorScreen.innerText = `${result}`;
  } else if (operator === "×") {
    const result = handleMultiply(Number(num1), Number(num2));
    calculatorScreen.innerText = `${result}`;
  } else if (operator === "÷") {
    const result = handleDivide(Number(num1), Number(num2));
    calculatorScreen.innerText = `${result}`;
  }
};

const handleClickOperator = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;
  operator = button.innerText;
};

const handleClickClear = () => {
  calculatorScreen.innerText = "";
  num1 = "";
  num2 = "";
  operator = "";
};

const handleClickPoint = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  calculatorScreen.innerText += button.innerText;
};

const options: Options = {
  particleCount: 125,
  spread: 150,
  colors: ["#DF2A4D", "#FF7159", "#FFFEDF"],
};

const fireConfetti = () => {
  confetti(options);
};

numberButtons.forEach((button) => {
  button.addEventListener("click", handleClickNumber);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleClickOperator);
});

equalsButton.addEventListener("click", handleEquals);

clearButton.addEventListener("click", handleClickClear);

pointButton.addEventListener("click", handleClickPoint);

smileButton.addEventListener("click", fireConfetti);
