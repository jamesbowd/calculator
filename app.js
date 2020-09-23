const add = (int1, int2) => {
  return int1 + int2;
};

const subtract = (int1, int2) => {
  return int1 - int2;
};

const multiply = (int1, int2) => {
  return int1 * int2;
};

const divide = (int1, int2) => {
  if (int2 === 0) {
    return "You cannot divide by zero";
  } else {
    return int1 / int2;
  }
};

const operate = (operator, int1, int2) => {
  if (operator === "add") {
    return add(int1, int2);
  }
  if (operator === "subtract") {
    return subtract(int1, int2);
  }
  if (operator === "multiply") {
    return multiply(int1, int2);
  }
  if (operator === "divide") {
    return divide(int1, int2);
  }
};

const equals = (newAction) => {
  int2 = parseFloat(display.textContent);
  answer = operate(operator, int1, int2);
  display.textContent = answer;
  lastAction = newAction;
  int1 = parseFloat(display.textContent);
};

const actionOperator = (action) => {
  if (int1 !== 0 && lastAction !== "equals") {
    equals("operator");
  } else {
    int1 = parseFloat(display.textContent);
    operator = action;
    lastAction = "operator";
  }
  hasPoint = false;
};

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".btn");

let operator = "";
let int1 = 0;
let int2 = 0;
let lastAction;
let hasPoint = false;

for (let key of keys) {
  const action = key.dataset.action;
  const keyContent = key.textContent;

  key.addEventListener("click", () => {
    const displayedNum = display.textContent;
    if (!action) {
      if (displayedNum === "0" || lastAction === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      lastAction = "number";
    }
    if (action === "point") {
      if (hasPoint === false) {
        display.textContent = displayedNum + ".";
        lastAction = "point";
        hasPoint = true;
      }
    }
    if (action === "add") {
      actionOperator("add");
    }
    if (action === "subtract") {
      actionOperator("subtract");
    }
    if (action === "multiply") {
      actionOperator("multiply");
    }
    if (action === "divide") {
      actionOperator("divide");
    }
    if (action === "equals") {
      equals("equals");
    }
    if (action === "clear") {
      operator = "";
      int1 = 0;
      int2 = 0;
      display.textContent = "0";
    }
  });
}
