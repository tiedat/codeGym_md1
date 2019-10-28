let Game = function (canvas) {
    this.namePlayer = '';
    this.timeGame = 90; // thời gian của một game 90s
    this.scoreGame = 0;
    this.holds = [];
    this.canvas = canvas;
    this.pointHold = 0;
};

Game.prototype.createHold = function () {
    let holdXY = [
        [500, 300],
        [500, 700],
        [500, 1100],
        [1000, 300],
        [1000, 700],
        [1000, 1100],
        [1500, 300],
        [1500, 700],
        [1500, 1100]
    ];

    for (let i = 0; i < holdXY.length; i++) {
        let hold = new Hold(this);
        hold.x = holdXY[i][0];
        hold.y = holdXY[i][1];
        this.holds.push(hold);
    }
};

Game.prototype.showHold = function () {
    for (let i = 0; i < this.holds.length; i++) {
        this.holds[i].drawHold();
    }
};


// hàm check vị trí con trỏ
Game.prototype.check = function (hold, event) {
    let leftTarget = hold.x - hold.radius;
    let rightTarget = hold.x + hold.radius;
    let topTarget = hold.y - hold.radius;
    let botTarget = hold.y + hold.radius;
    let positionX = event.clientX;
    let positionY = event.clientY;
    let horizontalConditions = positionX >= leftTarget && positionX <= rightTarget;
    let verticalConditions = positionY >= topTarget && positionY <= botTarget;

    if (horizontalConditions && verticalConditions) {
        return true;
    }
};

// hàm click
Game.prototype.click = function () {
    let self = this;
    self.canvas.onmousedown = function (event) {
        for (let i = 0; i < self.holds.length; i++) {
            if (self.check(self.holds[i], event)) {
                self.scoreGame += self.holds[i].pointHold;
                document.getElementById('score').innerHTML = "Score " + self.scoreGame;
                console.log(self.scoreGame);
                self.holds[i].drawHold();
                return;
            }
        }
    }
};

    // // hàm timeOut trả giá trị true khi game kết thúc
    // Game.prototype.timeOver = function () {
    //     if (this.timeGame === -1) {
    //         clearTimeout(this.countTime());
    //         alert(' Time out !');
    //         return true;
    //     }
    // };
    //
    // // dùng hàm setTimeout để đếm thời gian của 1 game
    // Game.prototype.countTime = setTimeout(function () {
    //     this.timeGame--;
    //     this.timeOut();
    //     },1000
    // );
    //
    // // hàm countPoint để đếm số điểm


    // // hàm startGame để bắt đầu một game mới
    // this.startGame = function () {
    //     this.namePlayer = prompt(' Your name : ');
    //     alert(' You have 90s ');
    //     this.countTime();

