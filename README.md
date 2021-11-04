## Tests

Describe: Game

Test: "New game object should create two players and current player set to player 1."<br>
Code: <br>
let game = new Game();<br>
game.player1.name;<br>
game.player2.name;<br>
game.currentPlayer;<br>
Expected Output: "Player 1", "Player 2", player 1<br>

Describe: Player<br>

Test: "New player object should have properties name and current score and turn tally initialized to 0."<br>
Code:<br>
let player1 = new Player("Player 1");<br>
player1.name;<br>
player1.score;<br>
player1.turnTally;<br>
Expected Output: "Player 1", 0, 0<br>

Describe: Game.prototype.getRandom()<br>

Test: "Should return random integer between 1 and 6."<br>
Code:<br>
let number = game.rollDice();<br>
number;<br>
Expected Output: Number between 1 and 6:<br>

Describe: Player.prototype.rollDice() <br>

Test: "Should use getRandom and modify tally unless result is 1."<br>
Code:<br>
player1.rollDice();
Expected Output: <br>

Describe: Player.prototype.hold()
Test: ""<br>
Code:<br>
b.addSpace(space1);<br>
b.spaces;<br>
Expected Output: {1: space object};<br>

Describe: Game.prototype.switchPlayer()<br>

Test: ""<br>
Code:<br>
b.addSpace(space1);<br>
b.spaces;<br>
Expected Output: {1: space object};<br>

Describe: Game.prototype.checkForWinner()<br>

Test: ""<br>
Code: <br>
b.findSpace(1);<br>
Expected Output: Space object with id 1. <br>

