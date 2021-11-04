function Game(){
  this.player1 = new Player("Player 1");
  this.player2 = new Player("Player 2");
  this.currentPlayer = this.player1;
}

Game.prototype.switchPlayer = function(){
  if (this.currentPlayer.name==="Player 1"){
    this.currentPlayer = this.player2;

  }
  else{
    this.currentPlayer = this.player1;
  }
   
}

function Player(name) {
  this.name = name;
  this.score = 0;
  this.tally = 0;
}
Player.prototype.getRandom = function(){
  let number = Math.floor((Math.random() * 6) + 1);
    return number;
  }  

Player.prototype.rollDice = function(){
  let numberRolled = this.getRandom();
  if (numberRolled !=1){
    this.tally +=numberRolled;
  } 
  else{
    this.tally=0; 
  }
  return numberRolled;
}
Game.prototype.hold = function(){
  this.currentPlayer.score += this.currentPlayer.tally;
  this.currentPlayer.tally = 0;
  this.switchPlayer();
}
Game.prototype.checkForWinner = function(){
  let winner="none";
  const scoreChecked1 = this.player1.score+this.player1.tally;
  const scoreChecked2 = this.player2.score+this.player2.tally;
  if (scoreChecked1>=100){
    winner="Player 1"
  } 
  else if (scoreChecked1>=100){
    winner= "Player 2"
  } 
  return winner;
}

let game = new Game();

function attachContactListeners(){
  $("#roll").on("click", function() {
    let num = game.currentPlayer.rollDice();
    $("#roll-number-value").html(num);
    if (game.currentPlayer.name === "Player 1") {
    $("#p1-current-tally").html("Tally: "+ game.currentPlayer.tally);
    } else if (game.currentPlayer.name === "Player 2") {
    $("#p2-current-tally").html("Tally: "+ game.currentPlayer.tally);
    }
  });
  $("#hold").on("click", function() {
  game.hold();
  $("#p1-total-score").html("Score: "+ game.player1.score);
  $("#p2-total-score").html("Score: "+ game.player2.score);
  $("#p1-current-tally").html("Tally: "+ 0);
  $("#p2-current-tally").html("Tally: "+ 0);  
  $("#current-player").html(game.currentPlayer.name);
  $("#roll-number-value").html(0);
  });
}
//WHEN BACK FROM LUNCH FIX number 1 roll problem

$(document).ready(function() {
 
  $("#current-player").html(game.currentPlayer.name);
  attachContactListeners();
  
});

