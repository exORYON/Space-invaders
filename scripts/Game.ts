import { KeyboardHandler } from './Keyboard-handler.js';
import { PlayerShip } from './Player-ship.js';

interface Game {
  playerShip: PlayerShip;
  keyboardHandler: KeyboardHandler;
}

class Game {
  constructor() {
    alert('A few first shots may be frozen. The browser will optimize it after some time :)');
    
    this.keyboardHandler = new KeyboardHandler();
    this.playerShip = new PlayerShip();
    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('keydown', this.keyboardHandler.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.keyboardHandler.handleKeyUp.bind(this));

    document.addEventListener('click', this.playerShip.makeShot.bind(this));

    document.addEventListener('mousedown', this.playerShip.startShooting.bind(this));
    document.addEventListener('mouseup', this.playerShip.stopShooting.bind(this));
  }
}

const game = new Game();