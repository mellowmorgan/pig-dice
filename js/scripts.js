function Game(){
  let player1 = new Player("Player 1");
  this.player1 = player1;
  let player2 = new Player("Player 2");
  this.player2 = player2;
  this.currentPlayer = this.player1;
  this.gameOver = false;
}

function Player(name){
   this.name = name;
   this.marks = [];
   if (this.name==="Player 1"){
     this.markValue='X';
   }
   else{
     this.markValue="O";
   }
}

function Board(){
  this.spaces = {};
  this.currentId = 0;
}

Board.prototype.assignId = function(){
  let currentId =this.currentId+1;
  return currentId;
}
Board.prototype.addSpace = function(space){
  this.currentId = this.assignId();
  space.id = this.currentId;
  this.spaces[space.id]= space;
}

function Space(coordinate){
  this.coordinate = coordinate;
  this.isMarked = false;
  this.markedBy = "none";
}
Board.prototype.findSpace=function(id){
  if (this.spaces[id] != undefined) {
    return this.spaces[id];
  }
  return false;
};

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinning(player){
  let playerMarks = player.marks;
  let hasFirst=false;
  let hasSecond=false;
  let hasThird=false;
  winner="none";
  //could return either none, player.name, player.name
  winningPatterns.forEach(function(pattern){
    const firstEval = pattern[0];
    playerMarks.forEach(function(element){
      if (element===firstEval){
        hasFirst=true;
      }
    });
    const secondEval = pattern[1];
    playerMarks.forEach(function(element){
      if (element===secondEval){
        hasSecond=true;
      }
    });
    const thirdEval = pattern[2];
    playerMarks.forEach(function(element){
      if (element===thirdEval){
        hasThird=true;
      }
    });
    if (hasFirst && hasSecond && hasThird){
      winner=player.name;
      return winner;
    }
    hasFirst=false;
    hasSecond=false;
    hasThird=false;
  });
    return winner;
}
function checkDraw(board){
  let isMarkedCounter=0;
  let allTheSpaces = board.spaces;
  Object.keys(allTheSpaces).forEach(function(key){
    if(allTheSpaces[key].isMarked){
      isMarkedCounter++;
    }
  });
  if(isMarkedCounter===9){
    return true;
  }
  else{return false;}
}

function attachContactListeners(){
  let currentPlayer = game.currentPlayer;

  
  $("#new-game").on("click", function(){
    window.location.reload();
  });
  $(".box").on("click",function(){
    $("#"+this.id).html(currentPlayer.markValue);
      currentPlayer.marks.push(parseInt(this.id));
      let space = board.findSpace(parseInt(this.id)+1);
      space.isMarked=true;
      space.markedBy=currentPlayer;
      
    let winner = checkWinning(currentPlayer);
    let draw = checkDraw(board);
    
    if(winner!="none"){
      $("#winning-player-or-draw").html("The winner is: "+currentPlayer.name);
      $("#game-status").show();
      $(".box").hide();
      $("#turn").hide();
      $(".img1").show();
    }
    else if(draw){
      $("#winning-player-or-draw").html("It's a draw");
      $("#game-status").show();
      $(".box").hide();
      $("#turn").hide();
      $(".img2").show();
      $(".img1").hide();
    }
    
    else{
      if (currentPlayer.name === "Player 1"){
        game.currentPlayer = game.player2;
      } else {
          game.currentPlayer = game.player1;
      }
      $("#player-turn").html(game.currentPlayer.name);
      currentPlayer = game.currentPlayer; 
    }
    $("#"+this.id).off("click");
  });
}

let game = new Game();
let board = new Board();
for (let i=0;i<9;i++){
  let space = new Space(i);
  board.addSpace(space);
}
$(document).ready(function() {
  $("#player-turn").html(game.currentPlayer.name);
  attachContactListeners(); 
});

//BACK FROM LUNCH CHECK FOR WINNER NOW ON CLICK!!!!!!!!!!!!!