var diceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelector(".play-button").onclick = function() {
  OnPlayButtonDown();
}

function OnPlayButtonDown() {
  var randomDieOne = Math.floor(Math.random() * 6);
  var randomDieTwo = Math.floor(Math.random() * 6);

  document.querySelector(".player-one").src = diceImage[randomDieOne];
  document.querySelector(".player-two").src = diceImage[randomDieTwo];

  if (randomDieOne > randomDieTwo) {
    document.querySelector(".heading").textContent = "Player 1 Won!";
  }
  else {
    document.querySelector(".heading").textContent = "Player 2 Won!";
  }
}
