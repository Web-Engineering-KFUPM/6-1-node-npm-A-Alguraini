export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((accumulator, current) => accumulator - current);
}

export function multiply(numbers) {
  return numbers.reduce((accumulator, current) => accumulator * current, 1);
}

export function divide(numbers) {
  if (numbers.slice(1).includes(0)) {
    return "Error: Division by zero is not allowed.";
  }
  return numbers.reduce((accumulator, current) => accumulator / current);
}