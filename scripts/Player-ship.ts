export interface PlayerShip {
  playerShipIcon: HTMLImageElement;

  speed: number;

  positionY: number;
  positionX: number;
}

export class PlayerShip {
  static bulletsToMove = [];
  static shootingTimer: any;
  static bulletsTimer: any;
  static bulletsCounter = 0;

  static traceBullet(id: number) {
    const bullet = document.getElementById(`bullet-${id}`);
    PlayerShip.bulletsToMove.push(bullet);
    PlayerShip.bulletsTimer = setInterval(PlayerShip.moveBullets.bind(PlayerShip), 400);
  }

  static moveBullets() {
    if (this.bulletsToMove.length === 0) {
      clearInterval(this.bulletsTimer);
      return;
    }

    for (let bullet of this.bulletsToMove) {
      let currentPosY = parseInt(bullet.style.top);
      currentPosY--;

      bullet.style.top = currentPosY + '%';

      if (currentPosY <= 0) {
        this.bulletsToMove.splice(this.bulletsToMove.indexOf(bullet), 1);
        bullet.remove();
      }
    }
  }

  static getCurrentShipPosition() {
    return {x: this.playerShip.positionX, y: this.playerShip.positionY };
  }

  constructor() {
    this.playerShipIcon = new Image();
    this.playerShipIcon.onerror = () => {
      this.playerShipIcon.src = 'https://raw.githubusercontent.com/exORYON/Projects-preview/8f68ad6c52f7a731fb8ca3446e95770b7f4127ed/player-ship.svg';
    }
    this.playerShipIcon.src = 'images/player-ship.svg';
    this.playerShipIcon.classList.add('player-ship');

    this.speed = 1;

    this.positionY = 80;
    this.positionX = 50;

    this.updatePosition();
    
    document.body.appendChild(this.playerShipIcon);
  }

  move(directions: boolean[]) {
    // TOP
    if (directions[0] && this.positionY > 5) {
      this.playerShipIcon.style.top = `${this.positionY - (this.speed * 2)}%`;
      this.playerShipIcon.classList = 'player-ship moving moving-top';
      this.positionY--;
    }
    // BOTTOM
    if (directions[1] && this.positionY < 95) {
      this.playerShipIcon.style.top = `${this.positionY + (this.speed * 0.8)}%`;
      this.playerShipIcon.classList = 'player-ship moving moving-bottom';
      this.positionY++;
    }
    // LEFT
    if (directions[2] && this.positionX > 3) {
      this.playerShipIcon.style.left = `${this.positionX - this.speed}%`;
      this.playerShipIcon.classList = 'player-ship moving moving-left';
      this.positionX--;
    }
    // RIGHT
    if (directions[3] && this.positionX < 97) {
      this.playerShipIcon.style.left = `${this.positionX + this.speed}%`;
      this.playerShipIcon.classList = 'player-ship moving moving-right';
      this.positionX++;
    }
  }

  updatePosition() {
    this.playerShipIcon.style.top = `${this.positionY}%`;
    this.playerShipIcon.style.left = `${this.positionX}%`;
  }

  stopMoving() {
    this.playerShip.playerShipIcon.classList = 'player-ship';
  }

  makeShot() {
    const { x:bulletPosX, y:bulletPosY } = PlayerShip.getCurrentShipPosition.call(this);
    const id = PlayerShip.bulletsCounter;

    this.playerShip.playerShipIcon.insertAdjacentHTML('beforebegin',
    `<div class="bullet" id="bullet-${id}" style="left: ${bulletPosX}%; top: ${bulletPosY}%"></div>`);

    PlayerShip.traceBullet(id);
    PlayerShip.bulletsCounter++;
  }

  startShooting() {
    PlayerShip.shootingTimer = setInterval(
      this.playerShip.makeShot.bind(this)
    , 500);
  }

  stopShooting() {
    clearInterval(PlayerShip.shootingTimer);
  }
}