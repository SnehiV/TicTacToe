const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

$( () => {
  const game = new Game();
  const $grid = $('.ttt');
  const view = new View(game, $grid);
  view.setupBoard();
  view.bindEvents();
   //remember to put in Jquery object
});
