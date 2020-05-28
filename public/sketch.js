var socket;
let nodes = [];
let playerName;
let playerColor = 0;

let clientPlayer;

function setup() {
  noStroke();
  frameRate(30);
  createCanvas(windowWidth, windowHeight);

  playerColor = color(Math.round(random(360)), 255, 255);

  background(0);
  rectMode(CENTER);
  playerName = "Player: " + Math.round(random(10));

  clientPlayer = new player(mouseX, mouseY, 255);

  socket = io.connect("http://localhost:3000");
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  //   node.update(data.x, data.y, data.playerColor);
}

let clientTime = 0;

function draw() {
  background(0, 10);

  var data = {
    x: mouseX,
    y: mouseY,
    name: playerName,
    playerColor: playerColor,
  };

  socket.emit("mouse", data);

  clientPlayer.update(mouseX, mouseY);
  clientPlayer.draw();

  clientTime += 1;
}

function mouseMoved() {}
