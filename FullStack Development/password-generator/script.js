const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?/`~';

let passOne = document.getElementById('pass-one');
let passTwo = document.getElementById('pass-two');

let passwordLengthInput = document.getElementById('password-length');
let lowercaseToggle = document.getElementById('lowercase-toggle');
let uppercaseToggle = document.getElementById('uppercase-toggle');
let numbersToggle = document.getElementById('numbers-toggle');
let symbolsToggle = document.getElementById('symbols-toggle');

let generateBtn = document.getElementById('generate-btn');



function generateRandomPassword() {

  let validChars = '';
  if (lowercaseToggle.checked) {
    validChars += lowercaseChars;
  }
  if (uppercaseToggle.checked) {
    validChars += uppercaseChars;
  }
  if (numbersToggle.checked) { 
    validChars += numbers;
  }
  if (symbolsToggle.checked) {
    validChars += symbols;
  }
  if (validChars === '') {
    alert('Please select at least one character type!');
    return;
  }
  
  desiredLength = passwordLengthInput.value;

  let firstPassword = getRandomString(validChars, passwordLengthInput.value);
  let secondPassword = getRandomString(validChars, passwordLengthInput.value);

  passOne.textContent = firstPassword;
  passTwo.textContent = secondPassword;

}

function getRandomString(charactersPool, desiredLength) {
  
  let result = "";
  
  for (let i = 0; i < desiredLength; i++) {
    
    let randomIndex = Math.floor(Math.random() * charactersPool.length)
    let randomChar = charactersPool[randomIndex];
    result += randomChar;

  }

  return result;

}

generateBtn.addEventListener('click', generateRandomPassword);

function copyToClipboard(text) {

  if (text == '') { return; }

  navigator.clipboard.writeText(text);
  alert('Password copied to clipboard!');

}

passOne.addEventListener('click', function () {
  copyToClipboard(passOne.textContent);
});

passTwo.addEventListener('click', function () {
  copyToClipboard(passTwo.textContent);
});