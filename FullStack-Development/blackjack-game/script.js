let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")
let player = {
  name: "Oswald",
  chips: 145
}
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {

    return 10

  } else if (randomNumber === 1) {

    return 11

  } else {

    return randomNumber

  }
}

function startGame() {
  
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard,secondCard]
  renderGame()

}

function renderGame() {

  cardsEL.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }

  sumEL.textContent = "Sum: " + sum;

  if (sum <= 20) {

    message = "Do you want to draw a new card?"

  } else if (sum === 21) {

    message = "You've got Blackjack!"
    hasBlackJack = true

  } else {

    message = "You're out of the game!"
    isAlive = false

  }
  messageEl.textContent = message;

}

function newCard() {

  if (isAlive === true && hasBlackJack === false) {

    let card = getRandomCard()
    cards.push(card);
    sum += card;

    renderGame()
    
  }

}