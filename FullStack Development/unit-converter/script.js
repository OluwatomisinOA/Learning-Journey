const numEl = document.getElementById("num-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () { 

  let numValue = numEl.value

  lengthCon(numValue)
  volumeCon(numValue)
  massCon(numValue)

})

function lengthCon(numValue) {

  const meterToFeet = 3.281
  let feetValue = (numValue * meterToFeet).toFixed(3)
  let meterValue = (numValue / meterToFeet).toFixed(3)
  lengthEl.textContent = `${numValue} meters = ${feetValue} feet | ${numValue} feet = ${meterValue} meters`
}

function volumeCon(numValue) { 

  const litreToGallon = 0.264
  let gallonValue = (numValue * litreToGallon).toFixed(3)
  let litreValue = (numValue / litreToGallon).toFixed(3) 
  volumeEl.textContent = `${numValue} litres = ${gallonValue} gallons | ${numValue} gallons = ${litreValue} litres`

}

function massCon(numValue) { 

  const kiloToPound = 2.204
  let poundValue = (numValue * kiloToPound).toFixed(3)
  let kiloValue = (numValue / kiloToPound).toFixed(3)
  massEl.textContent = `${numValue} kilos = ${poundValue} pounds | ${numValue} pounds = ${kiloValue} kilos`

}