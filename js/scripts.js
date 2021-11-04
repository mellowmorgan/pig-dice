function Game(){
  this.player1 = new Player("Player 1");
  this.player2 = new Player("Player 2");
  this.currentPlayer = this.player1;
}

Game.prototype.getRandom = function(){
  let number = Math.floor((Math.random() * 6) + 1);
    return number;
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


Player.prototype.rollDice = function(){
  let numberRolled = Game.getRandom();
  if (numberRolled !=1){
    this.tally +=numberRolled;
  } 
  else{
    this.tally=0; 
  }
  return numberRolled;
}
Player.prototype.hold(){
  this.score += this.tally;
  this.tally = 0;
  Game.switchPlayer;
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

$(document).ready(function() {

});

