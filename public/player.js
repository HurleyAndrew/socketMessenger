/**
 * @player.js
 * Creates instance of a player
 * player(xPos, yPos, color)
 * xPos = current x location
 * yPos = current y location
 * color = color
 */

class player {
  constructor(xPos, yPos, color) {
    this.xPos = xPos;
    this.yPos = yPos;

    this.h = 10;
    this.w = 10;

    this.color = color;

    this.size = 10;
    this.spacing = 0;
  }

  update(nX, nY) {
    this.xPos = nX;
    this.yPos = nY;
  }

  // How far away from a specfic xy is a point on the grid
  distanceToEntity(nX, nY) {
    return dist(nX, nY, this.xPos, this.yPos);
  }

  draw() {
    push();
    // translate(this.xPos - this.x1 / 2, this.yPos - this.y1 / 2);
    // translate(-this.w / 2, -this.h / 2);

    let cX = this.w * this.size;
    let cY = this.h * this.size;

    cX = cX / 2;
    cY = cY / 2;

    for (let x = 0; x < this.w; x++) {
      for (let y = 0; y < this.h; y++) {
        let x1 = x * this.size;
        let y1 = y * this.size;

        let x2 = x1 / 2;
        let y2 = y1 / 2;

        let newS = 40 / dist(x1, y1, cX, cY);
        // let newS = (20 / dist(x1, y1, x2, y2)) * this.size;
        // let newS = 100 / this.distanceToEntity(x1, y1);
        fill(255, newS * 5);
        // rect(x1, y1, newS);
        rect(x1 + this.xPos, y1 + this.yPos, newS);
      }
    }
    pop();
  }
}
