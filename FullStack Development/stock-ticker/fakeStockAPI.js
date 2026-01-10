export function getStockData() {
  return {
    name: 'QTECHAI',
    symbol: 'QTAI',
    price: (Math.random() * 3).toFixed(2),
    time: new Date().toLocaleTimeString(),
  }
}