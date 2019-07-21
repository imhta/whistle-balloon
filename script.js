let balloon;
let obs = [];
let ui;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balloon = new Balloon();
  obs.push(new Obs());
  ui = new CreateUi();
}

function draw(){
  background(255);
  for (var i = obs.length-1; i >= 0; i--) {
    obs[i].show();
    obs[i].update();

    // if (obs[i].hits(balloon)) {
    //   console.log('HIT');
    // }

    if (obs[i].offscreen()) {
      obs.splice(i, 1);
    }
  }
  balloon.update();
  balloon.show();
  
  if (frameCount % 70 == 0) {
    obs.push(new Obs());
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}