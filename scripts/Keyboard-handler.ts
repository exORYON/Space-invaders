export interface KeyboardHandler {
  movingAnimationTimer: any;
  keysPressed: boolean[];
}

export class KeyboardHandler {
  static movingAnimationTimer = null;
  static keysPressed = [false, false, false, false]; // TOP BOTTOM LEFT RIGHT

  handleKeyDown(event) {
    clearTimeout(this.movingAnimationTimer);

    switch(event.code) {
      case 'KeyW':
        KeyboardHandler.keysPressed[0] = true;
      break;
      case 'KeyS':
        KeyboardHandler.keysPressed[1] = true;
      break;
      case 'KeyA':
        KeyboardHandler.keysPressed[2] = true;
      break;
      case 'KeyD':
        KeyboardHandler.keysPressed[3] = true;
      break;
    }

    this.playerShip.move(KeyboardHandler.keysPressed);
  }

  handleKeyUp(event) {
    switch(event.code) {
      case 'KeyW':
        KeyboardHandler.keysPressed[0] = false;
        break;
      case 'KeyS':
        KeyboardHandler.keysPressed[1] = false;
        break;
      case 'KeyA':
        KeyboardHandler.keysPressed[2] = false;
        break;
      case 'KeyD':
        KeyboardHandler.keysPressed[3] = false;
        break;
    }

    this.movingAnimationTimer = setTimeout(
      this.playerShip.stopMoving.bind(this),
    250);
  }
}