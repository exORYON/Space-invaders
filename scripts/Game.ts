import { KeyboardHandler } from './Keyboard-handler.js';
import { PlayerShip } from './Player-ship.js';

interface Game {
  playerShip: PlayerShip;
  keyboardHandler: KeyboardHandler;
}

class Game {
  constructor() {
    this.keyboardHandler = new KeyboardHandler();
    this.playerShip = new PlayerShip();

    this.initializeGame();
  }

  initializeGame() {
    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('keydown', this.keyboardHandler.handleKeyDown.bind(this));
    document.addEventListener('keyup', this.keyboardHandler.handleKeyUp.bind(this));
  }
}

const game = new Game();