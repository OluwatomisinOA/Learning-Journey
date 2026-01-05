let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function startGame() {
  renderGame()
}

function renderGame() {
  // reset the cards display first
  cardsEL.textContent = "Cards: ";

  // loop and all current cards
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }

  // update sum
  sumEL.textContent = "Sum: " + sum;

  // game logic
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
  // add to array and update sum
  let card = 6
  cards.push(card);
  sum += card;
  
  // re-render everything
  renderGame()
}
