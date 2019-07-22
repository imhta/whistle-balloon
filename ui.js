class CreateUi {
  constructor() {
    this.stateOfbutton = false;
    this.createElements();
    this.applyPosition();
    this.applyStyle();
    this.applyFunctionality();
  }

  createElements() {
    this.startButton = createButton("Start / Pause");
    this.levelState = createElement('p', '');
  }
  applyPosition() {
    this.startButton.position(19, 19);
    this.levelState.position(170, 12);
  }
  updateLevelState(text){
    this.levelState.html(text);
  }
  applyStyle() {}
  applyFunctionality() {
    this.startButton.mousePressed(this.changeButton);
  }
  changeButton() {
    if (!this.stateOfbutton) {
      this.stateOfbutton = true;
      this.startButton = createButton("Pause");
      loop();
    } else {
      this.stateOfbutton = false;
      noLoop();
    }
  }
}
