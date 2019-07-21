class CreateUi{
    constructor() {
        this.stateOfbutton = false;
        this.createElements();
        this.applyPosition();
        this.applyStyle();
        this.applyFunctionality();
    }

    createElements() {
        this.pauseButton = createButton('Pause');
    }
    applyPosition() {
        this.pauseButton.position(19, 19);
    }
    applyStyle() {
    }
    applyFunctionality() {
        this.pauseButton.mousePressed(this.changeButton);
    }
    changeButton() {
        if (!this.stateOfbutton) {
            this.stateOfbutton = true;
            noLoop();
        } else {
            this.stateOfbutton = false;
            loop();
        }
    }
}

