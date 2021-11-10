import { exportAllDeclaration } from '@babel/types';
import { testPathPatternToRegExp } from 'jest-util';
import { Game } from './../src/game.js';


describe('Game', () => {
  test('Should create Game object with player 1, player 1, current player properties', () => {
  const game = new Game();
  expect(game.player1.name).toEqual("Player 1");
  expect(game.player2.name).toEqual("Player 2");
  expect(game.currentPlayer.name).toEqual("Player 1");
  });
});
