var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
};

View.prototype.bindEvents = function () {
  $('li').on('click', (event) => {
    const $currentSquare = $(event.currentTarget);
    this.makeMove($currentSquare);
  });
};

View.prototype.makeMove = function ($square) {
  const pos = $square.data('pos');
  try{
    this.game.playMove(pos);
  }
  catch(error){
    alert(error.msg);
  }

  $square.css("background", "white");
  $square.text(this.game.currentPlayer);

  if (this.game.isOver()) {
    $('.ttt li').css('color', 'red');

    if (this.game.winner()) {
      const message = $('<strong></strong>');
      message.text('Congrats');
      $('.ttt').append(message);
    } else {
      const message = $('<strong></strong>');
      message.text('Game over');
      $('.ttt').append(message);
    }
  }
};

View.prototype.setupBoard = function () {
  const $grid = $('<ul></ul');
  this.$el.append($grid);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      const $square = $('<li></li>');
      $square.data('pos', [i, j]);
      $grid.append($square);
    }
  }
};

module.exports = View;
