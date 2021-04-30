// Create a class
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  calcVolume() {
    return this.length * this.width * this.height;
  }
}

// Use the class
let myCuboid = new Cuboid(10, 20, 30); // length = 10, width = 20, height = 30
console.log(myCuboid.calcVolume()); // Print the volume