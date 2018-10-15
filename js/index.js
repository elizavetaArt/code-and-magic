let CLOUD_WIDTH = 500;
let CLOUD_HEIGHT  = 200;
let CLOUD_X = 100;
let CLOUD_Y = 50;
let GAP = 10;
let FONT_GAP = 15;
let TEXT_WIDTH = 50;
let BAR_HEIGHT = 20;
let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
let getMaxElement = function(arr) {
    let maxElement = arr[0];
    for( let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#a9ffa3');

    ctx.fillStyle = '#000';
    let maxTime = getMaxElement(times);

    for(let i = 0; i < players.length; i++) {
        // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
        ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
    }
};
