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
    add(int1, int2);
  }
  if (operator === "subtract") {
    addsubtract(int1, int2);
  }
  if (operator === "multiply") {
    multiply(int1, int2);
  }
  if (operator === "divide") {
    divide(int1, int2);
  }
};
