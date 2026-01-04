let num1 = 8
let num2 = 2

let sumEl = document.getElementById("sum-el")
let total = 0
function add() {
  let result = num1 + num2
  sumEl.textContent = "Result: " + result
}
function subtract() {
  let result = num1 - num2
  sumEl.textContent = "Result: " + result
}
function divide() {
  let result = num1 / num2
  sumEl.textContent = "Result: " + result
}
function multiply() {
   let result = num1 * num2
  sumEl.textContent = "Result: " + result
}

