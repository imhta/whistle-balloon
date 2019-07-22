let balloon;
let obs = [];
let hit = 0;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balloon = new Balloon();
  obs.push(new Obs());
  ui = new CreateUi();
  noLoop();

}

function draw(){
  background(255);
  ui.update(`Score ${hit}`)
  for (var i = obs.length-1; i >= 0; i--) {
    obs[i].show();
    obs[i].update();

    if (obs[i].hits(balloon)) {
      hit = 0
    }

    if (obs[i].offscreen()) {
      obs.splice(i, 1);
    }
  }
  balloon.update();
  balloon.show();
  
  if (frameCount % 70 == 0) {
    obs.push(new Obs());
         hit++
  }

}

function mouseClicked()  {
    balloon.up();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}