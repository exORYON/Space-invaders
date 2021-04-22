import { KeyboardHandler } from './Keyboard-handler.js';
import { PlayerShip } from './Player-ship.js';
var Game = /** @class */ (function () {
    function Game() {
        this.keyboardHandler = new KeyboardHandler();
        this.playerShip = new PlayerShip();
        this.initializeGame();
    }
    Game.prototype.initializeGame = function () {
        this.addEventListeners();
    };
    Game.prototype.addEventListeners = function () {
        document.addEventListener('keydown', this.keyboardHandler.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.keyboardHandler.handleKeyUp.bind(this));
    };
    return Game;
}());
var game = new Game();
