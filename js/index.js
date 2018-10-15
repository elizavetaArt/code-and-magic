let CLOUD_WIDTH = 500;
let CLOUD_HEIGHT  = 200;
let CLOUD_X = 100;
let CLOUD_Y = 50;
let GAP = 10;
let FONT_GAP = 70;
let TEXT_HEIGHT = 120;

let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
let getMaxElement = function(arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(maxElement < arr[i]) {
            maxElement = arr[i];
        }
    }
    return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#a9ffa3');

    for (let i = 0; i < players.length; i++) {
        ctx.fillStyle = '#94acff';
        let maxTime = getMaxElement(times);
        ctx.fillText(players[i], TEXT_HEIGHT + (CLOUD_X * i), 2 * (CLOUD_X + GAP * 2));
        ctx.fillRect(TEXT_HEIGHT + (CLOUD_X * i), FONT_GAP, FONT_GAP + GAP, (CLOUD_X + CLOUD_Y) * times[i] / maxTime);
    }
};
