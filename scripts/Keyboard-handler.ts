export class KeyboardHandler {
  static movingAnimationTimer = null;

  handleKeyDown(event) {
    clearTimeout(KeyboardHandler.movingAnimationTimer);

    switch(event.code) {
      case 'KeyW':
        this.playerShip.move('top');
      break;
      case 'KeyA':
        this.playerShip.move('left');
      break;
      case 'KeyS':
        this.playerShip.move('bottom');
      break;
      case 'KeyD':
        this.playerShip.move('right');
      break;
    }
  }

  handleKeyUp(event) {
    switch(event.code) {
      case 'KeyW':
      case 'KeyA':
      case 'KeyS':
      case 'KeyD':
        KeyboardHandler.movingAnimationTimer = setTimeout(
          this.playerShip.stopMoving.bind(this),
        250);
    }
  }
}