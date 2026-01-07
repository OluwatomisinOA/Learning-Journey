// refence html elements
const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2')
const resultText = document.getElementById('result')
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

// add button event listener
addBtn.addEventListener('click', function (e) { 

  e.preventDefault()

  let numOneValue = numOneInput.value;
  let numTwoValue = numTwoInput.value;
  let result = parseFloat(numOneValue) + parseFloat(numTwoValue);

  resultText.textContent = `${numOneValue} + ${numTwoValue} = ${result}`;

})

// aubtract button event listener
subtractBtn.addEventListener('click', function (e) { 

  e.preventDefault()

  let numOneValue = numOneInput.value;
  let numTwoValue = numTwoInput.value;
  let result = parseFloat(numOneValue) - parseFloat(numTwoValue);

  resultText.textContent = `${numOneValue} - ${numTwoValue} = ${result}`;

})

// multiply button event listener
multiplyBtn.addEventListener('click', function (e) { 

  e.preventDefault()

  let numOneValue = numOneInput.value;
  let numTwoValue = numTwoInput.value;
  let result = parseFloat(numOneValue) * parseFloat(numTwoValue);

  resultText.textContent = `${numOneValue} × ${numTwoValue} = ${result}`;

})

// divide button event listener
divideBtn.addEventListener('click', function (e) { 

  e.preventDefault()

  let numOneValue = numOneInput.value;
  let numTwoValue = numTwoInput.value;
  let result = parseFloat(numOneValue) / parseFloat(numTwoValue);

  resultText.textContent = `${numOneValue} ÷ ${numTwoValue} = ${result}`;
  
})