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
  return int1 / int2;
};

const operate = (operator, int1, int2) => {
  if (operator === "add") {
    return add(int1, int2);
  }
  if (operator === "subtract") {
    return addsubtract(int1, int2);
  }
  if (operator === "multiply") {
    return multiply(int1, int2);
  }
  if (operator === "divide") {
    return divide(int1, int2);
  }
};

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".btn");
let operator = "";
let int1 = 0;
let int2 = 0;
let lastAction;

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
      display.textContent = displayedNum + ".";
      lastAction = "point";
    }
    if (action === "add") {
      int1 = parseFloat(display.textContent);
      operator = "add";
      lastAction = "operator";
    }
    if (action === "equals") {
      int2 = parseFloat(display.textContent);
      answer = operate(operator, int1, int2);
      display.textContent = answer;
      lastAction = "equals";
    }
  });
}
