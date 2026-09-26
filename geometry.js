const m = require("./math");


function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    return (m.sqr(x2 - x1) + m.sqr(y2 - y1)) ** 0.5;
}

module.exports = {
    calcOffset,
    distanceBetweenTwoPoints,
};