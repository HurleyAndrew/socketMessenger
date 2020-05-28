class node {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = 0;
    this.size = 0;
  }

  update(nX, nY, color) {
    this.color = color;
    this.size = count / dist(nX, nY, this.xPos, this.yPos);
  }

  // How far away from a specfic xy is a point on the grid
  distanceToEntity(nX, nY) {
    return dist(nX, nY, this.xPos, this.yPos);
  }

  draw() {
    let maxSize = 5;
    let minSize = 0.2;

    this.color.setAlpha(map(this.size, minSize, maxSize, 0, 1));

    fill(this.color);

    if (this.size < minSize) {
      rect(this.xPos, this.yPos, 0, 0);
    } else if (this.size < maxSize) {
      rect(this.xPos, this.yPos, this.size, this.size);
    } else {
      rect(this.xPos, this.yPos, maxSize, maxSize);
    }
  }
}
