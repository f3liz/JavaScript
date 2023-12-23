/*
This file contains javascript code to draw the ground, water, background, city name, and buildings.
Also contains functions that generate random numbers used to give random location and height
of buildings. Has loops as well to generate rows of windows and multiple buildings.
Author: Felix Chen
Date: 10/31/23
File name: draw.js
 */
// constants
const canvas = document.getElementById("my-canvas");
const context = canvas.getContext("2d");

const WATER_HGT = 100;
const GROUND_HGT = 10;
const CVS_WIDTH = 600;
const CVS_HEIGHT = 400;
const BUILD_WIDTH = 55;
const BUILD_MIN_H = 30;
const BUILD_MAX_H = 150;
const FONT_HEIGHT = 40;
const FONT_WIDTH = 100;
const WINDOW_SIZE = 5;
const NUM_BUILDINGS = 15;

// calling functions
scene();

// functions
function drawWater() {
    context.fillStyle = "darkblue";
    context.fillRect(0, CVS_HEIGHT - WATER_HGT, CVS_WIDTH, WATER_HGT);
}

function drawGround() {
    context.fillStyle = "black";
    context.fillRect(0, CVS_HEIGHT - (GROUND_HGT + WATER_HGT), CVS_WIDTH, GROUND_HGT);
}

function drawBackground() {
    context.fillStyle = "dodgerblue";
    context.fillRect(0, 0, CVS_WIDTH, CVS_HEIGHT- (GROUND_HGT + WATER_HGT));
}

function drawName() {
    context.fillStyle = "white";
    context.font = "40px serif";
    context.fillText("Seattle", 480, FONT_HEIGHT, FONT_WIDTH);
}

function drawBuilding(x, y, h) {
    context.fillStyle = "black";
    context.fillRect(x, y, BUILD_WIDTH, h);
}

function drawWindows(x, y) {
    context.fillStyle = "white";
    // + 1 to x and + 7 to y to help center the windows
    context.fillRect(x + 1, y + 7 , WINDOW_SIZE, WINDOW_SIZE);
}

function randomNum (low, high) {
    return Math.random() * (high - low + 1) + low;
}

function drawSkyline() {
    // x, y, h variables give random location and height to buildings
    let h = randomNum(BUILD_MIN_H, BUILD_MAX_H);
    let x = randomNum(0, CVS_WIDTH - BUILD_WIDTH);
    let y = (CVS_HEIGHT - (WATER_HGT + GROUND_HGT)) - h;

    drawBuilding(x, y, h);
    windowsLoop(x, y, h);

}

function windowsLoop(x, y, h) {
    let windowRow = h/12;
    let windowCount = 5;
    const initialX = x;
    for (let i = 1; i <= windowRow; i++) {
        for (let j = 1; j <= windowCount; j++) {
            x += 8;
            drawWindows(x, y);
        }
        x = initialX;
        y += 10;

    }
}

function scene(){
    drawWater();
    drawGround();
    drawBackground()
    drawName();
    for (let i = 1; i <= NUM_BUILDINGS; i++) {
        drawSkyline();
    }
}
