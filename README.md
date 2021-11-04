## Known Bugs

If clicking roll too quickly, it trips up the tally display, most likely because of delay I adding for displaying reasons.

## Tests

Describe: Game

Test: "New game object should create two players and current player set to player 1."<br>
Code: <br>
let game = new Game();<br>
game.player1.name; <br>
game.player2.name; <br>
game.currentPlayer; <br>
Expected Output: "Player 1", "Player 2", player 1<br>

Describe: Player<br>

Test: "New player object should have properties name and current score and turn tally initialized to 0."<br>
Code:<br>
let player1 = new Player("Player 1");<br>
player1.name; <br>
player1.score; <br>
player1.turnTally;<br>
Expected Output: "Player 1", 0, 0<br>

Describe: Game.prototype.getRandom()<br>

Test: "Should return random integer between 1 and 6."<br>
Code:<br>
let number = game.rollDice();<br>
number;<br>
Expected Output: Number between 1 and 6:<br>

Describe: Player.prototype.rollDice() <br>

Test: "Should use getRandom and modify tally of player unless result is 1, then 0 out tally if so, return number rolled."<br>
Code:<br>
player1.rollDice();<br>
player1.tally<br>
Expected Output: random number between 1-6, that number+tally<br>

Describe: Player.prototype.hold()<br>
Test: "Should add current tally to total score of player and zero out tally."<br>
Code:<br>
player1.hold()<br>
player1.tally;<br>
player1.score;<br>
Expected Output:  0, ? <br>

Describe: Game.prototype.switchPlayer()<br>

Test: "Should switch current player to other player2."<br>
Code:<br>
game.switchPlayer();<br>
game.currentPlayer;
Expected Output: "Player 2"<br>

Describe: Game.prototype.checkForWinner()<br>

Test: "Checks players total scores for at least 100 Returns winner or none"<br>
Code: <br>
game.checkForWinner()<br>
<br>
Expected Output: "none" <br>