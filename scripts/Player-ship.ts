export interface PlayerShip {
  playerShip: HTMLImageElement;
  positionY: number;
  positionX: number;
}

export class PlayerShip {
  constructor() {
    this.playerShip = document.createElement('img');
    this.playerShip.src = 'images/player-ship.svg';
    this.playerShip.classList.add('player-ship');

    this.positionY = 80;
    this.positionX = 50;
    this.updatePosition();
    
    document.body.appendChild(this.playerShip);
  }

  move(direction) {
    switch(direction) {
      case 'top':
        if (this.positionY > 5) {
          this.playerShip.style.top = `${this.positionY - 1}%`;
          this.playerShip.classList = 'player-ship moving moving-top';
          this.positionY--;
        }
      break;
      case 'bottom':
        if (this.positionY < 91) {
          this.playerShip.style.top = `${this.positionY + 1}%`;
          this.playerShip.classList = 'player-ship moving moving-bottom';
          this.positionY++;
        }
      break;
      case 'left':
        if (this.positionX > 5) {
          this.playerShip.style.left = `${this.positionX - 1}%`;
          this.playerShip.classList = 'player-ship moving moving-left';
          this.positionX--;
        }
      break;
      case 'right':
        if (this.positionX < 93) {
          this.playerShip.style.left = `${this.positionX + 1}%`;
          this.playerShip.classList = 'player-ship moving moving-right';
          this.positionX++;
        }
      break;
    }
  }

  updatePosition() {
    this.playerShip.style.top = `${this.positionY}%`;
    this.playerShip.style.left = `${this.positionX}%`;
  }

  stopMoving() {
    this.playerShip.playerShip.classList = 'player-ship';
  }

  inertionAfterStop() {

  }
}