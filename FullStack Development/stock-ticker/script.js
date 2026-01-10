import { getStockData } from "./fakeStockAPI.js";

setInterval(function () {
  const stockData = getStockData()
  renderStockTicker(stockData)
}, 1500)

let prevPrice = 0;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById('name')
  const stockDisplaySymbol = document.getElementById('symbol')
  const stockDisplayPrice = document.getElementById('price-value')
  const stockDisplayPriceIcon = document.getElementById('price-icon')
  const stockDisplayTime = document.getElementById('time')

  const { name, symbol, price, time } = stockData
  
  const priceDirectionIcon = price > prevPrice ? 'icons/up.svg' : price < prevPrice ? 'icons/down.svg' : 'icons/right.svg'
  
  priceIconElement.src = `${priceDirectionIcon}`
  priceIconElement.alt = 'Price direction icon'
  stockDisplayPriceIcon.innerHTML = ''
  stockDisplayPriceIcon.appendChild(priceIconElement)

  stockDisplayName.innerText = `Name: ${name}`
  stockDisplaySymbol.innerText = `Symbol: ${symbol}`
  stockDisplayPrice.innerText = `Price: ${price}`
  stockDisplayTime.innerText = `Time: ${time}`

  prevPrice = price

}