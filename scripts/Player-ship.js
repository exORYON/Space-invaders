var PlayerShip = /** @class */ (function () {
    function PlayerShip() {
        this.playerShipIcon = document.createElement('img');
        this.playerShipIcon.src = 'images/player-ship.svg';
        this.playerShipIcon.classList.add('player-ship');
        this.speed = 1;
        this.positionY = 80;
        this.positionX = 50;
        this.updatePosition();
        document.body.appendChild(this.playerShipIcon);
    }
    PlayerShip.traceBullet = function (id) {
        var bullet = document.getElementById("bullet-" + id);
        PlayerShip.bulletsToMove.push(bullet);
        PlayerShip.bulletsTimer = setInterval(PlayerShip.moveBullets.bind(PlayerShip), 100);
    };
    PlayerShip.moveBullets = function () {
        if (this.bulletsToMove.length === 0) {
            clearInterval(this.bulletsTimer);
            return;
        }
        for (var _i = 0, _a = this.bulletsToMove; _i < _a.length; _i++) {
            var bullet = _a[_i];
            var currentPosY = parseInt(bullet.style.top);
            currentPosY--;
            bullet.style.top = currentPosY + '%';
            if (currentPosY <= 0) {
                this.bulletsToMove.splice(this.bulletsToMove.indexOf(bullet), 1);
                bullet.remove();
            }
        }
    };
    PlayerShip.getCurrentShipPosition = function () {
        return { x: this.playerShip.positionX, y: this.playerShip.positionY };
    };
    PlayerShip.prototype.move = function (directions) {
        // TOP
        if (directions[0] && this.positionY > 5) {
            this.playerShipIcon.style.top = this.positionY - (this.speed * 2) + "%";
            this.playerShipIcon.classList = 'player-ship moving moving-top';
            this.positionY--;
        }
        // BOTTOM
        if (directions[1] && this.positionY < 95) {
            this.playerShipIcon.style.top = this.positionY + (this.speed * 0.8) + "%";
            this.playerShipIcon.classList = 'player-ship moving moving-bottom';
            this.positionY++;
        }
        // LEFT
        if (directions[2] && this.positionX > 3) {
            this.playerShipIcon.style.left = this.positionX - this.speed + "%";
            this.playerShipIcon.classList = 'player-ship moving moving-left';
            this.positionX--;
        }
        // RIGHT
        if (directions[3] && this.positionX < 97) {
            this.playerShipIcon.style.left = this.positionX + this.speed + "%";
            this.playerShipIcon.classList = 'player-ship moving moving-right';
            this.positionX++;
        }
    };
    PlayerShip.prototype.updatePosition = function () {
        this.playerShipIcon.style.top = this.positionY + "%";
        this.playerShipIcon.style.left = this.positionX + "%";
    };
    PlayerShip.prototype.stopMoving = function () {
        this.playerShip.playerShipIcon.classList = 'player-ship';
    };
    // inertionAfterStop() {
    // }
    PlayerShip.prototype.makeShot = function () {
        var _a = PlayerShip.getCurrentShipPosition.call(this), bulletPosX = _a.x, bulletPosY = _a.y;
        var id = PlayerShip.bulletsCounter;
        this.playerShip.playerShipIcon.insertAdjacentHTML('beforebegin', "<div class=\"bullet\" id=\"bullet-" + id + "\" style=\"left: " + bulletPosX + "%; top: " + bulletPosY + "%\"></div>");
        PlayerShip.traceBullet(id);
        PlayerShip.bulletsCounter++;
    };
    PlayerShip.bulletsToMove = [];
    PlayerShip.bulletsTimer = null;
    PlayerShip.bulletsCounter = 0;
    return PlayerShip;
}());
export { PlayerShip };
