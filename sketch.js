const r = require("raylib");

const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 1500;
const HEIGHT = 1000;
const FPS = 50;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Closer Target");
    r.SetTargetFPS(FPS);
}

const sourceX = 250;
const sourceY = 900;

const x1 = 900;
const y1 = 90;

const x2 = 90;
const y2 = 90;

const radiusOfCircle = 30;

function drawSource() {
    r.DrawCircle(sourceX, sourceY, radiusOfCircle, r.WHITE);
}

function drawTargets() {
    r.DrawCircle(x1, y1, radiusOfCircle, r.RED);
    r.DrawCircle(
        x2,
        y2,
        radiusOfCircle,
        r.GREEN,
    );
}

function drawConnector() {

    const target1Distance = g.distanceBetweenTwoPoints(
        sourceX,
        sourceY,
        x1,
        y1,
    );
    const target2Distance = g.distanceBetweenTwoPoints(
        sourceX,
        sourceY,
        x2,
        y2,
    );

    let tx = x1;
    let ty = y1;

    if (target1Distance > target2Distance) {
        tx = x2;
        ty = y2;
    }

    r.DrawLine(sourceX, sourceY, tx, ty, r.WHITE);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawSource();
    drawTargets();
    drawConnector();

    r.EndDrawing();
}

function teardown() {
    return r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
