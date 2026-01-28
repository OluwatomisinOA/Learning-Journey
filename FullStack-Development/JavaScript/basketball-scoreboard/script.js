let homeScore = 12
let guestScore = 5

function addPoints(team, points) {
  if (team === 'home') (
    homeScore += points,
    document.getElementById('home-score').textContent = homeScore
  )
  else (team === 'guest')(
    guestScore += points,
    document.getElementById('guest-score').textContent = guestScore
  )
}
function resetGame() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore
}