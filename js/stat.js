var fireballSize = 22;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};
var getWizardX = function (width) {
  return width / 2 - wizardWidth / 2;
};
var getWizardY = function (height) {
  return height / 2 - getWizardHeight() / 2;
};

var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 130;
var TEXT_Y = 260;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var GAP = 50;
var FONT_GAP = 25;
var GAP_SHADOW = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!',CLOUD_X + FONT_GAP + GAP,CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:',CLOUD_X + FONT_GAP + GAP,CLOUD_Y + FONT_GAP + FONT_GAP);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], TEXT_X + (GAP+BAR_WIDTH) * i , TEXT_Y);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + (GAP + BAR_WIDTH) * i, GAP);
    ctx.fillRect(TEXT_X + (GAP + BAR_WIDTH) * i ,TEXT_Y - GAP / 2, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime );
  }
};
