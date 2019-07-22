function Balloon() {
  this.y = 50;
  this.x = width/2;

  this.gravity = 0.1;
  this.lift = -5;
  this.velocity = 0;

  this.mic = new p5.AudioIn();
  this.mic.start();

  this.show = function() {
    fill('rgb(135,206,250)');
    noStroke();
    triangle(this.x-10, this.y+60, this.x, this.y+38, this.x+10 , this.y+60);
    ellipse(this.x, this.y, 84, 100);  
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity = 5;
    this.micLevel = this.mic.getLevel() * 550;
    this.velocity += this.gravity;
    this.y += this.velocity - this.micLevel;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
}