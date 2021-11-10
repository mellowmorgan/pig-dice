import $ from 'jquery';
import { Game, Player } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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
    if (num===1){
      $("#p1-current-tally").html("Tally: 0");
      $(this).delay(1000).queue(function() {
        game.switchPlayer();
        $("#current-player").html(game.currentPlayer.name);
        $("#roll-number-value").html(0);
        $(this).dequeue();
     });
    }
  });
  $("#hold").on("click", function() {
  game.hold();
  $("#p1-total-score").html("Score: "+ game.player1.score);
  $("#p2-total-score").html("Score: "+ game.player2.score);
  $("#p1-current-tally").html("Tally: "+ 0);
  $("#p2-current-tally").html("Tally: "+ 0);  
  let winner=game.checkForWinner()
  if(winner!="none"){
    $("#winner-name").html(winner);
    $(".game-over").show();
  }
  else{
    $("#current-player").html(game.currentPlayer.name);
    $("#roll-number-value").html(0);
  }
  });
  $("#new-game").on("click", function() {
      window.location.reload();
  });
}

 
$("#current-player").html(game.currentPlayer.name);
attachContactListeners();
  
