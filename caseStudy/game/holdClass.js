let Hold = function (game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.radius = 100;
    this.pointHold = 0;
};

    // vẽ canvas
    Hold.prototype.drawHold = function () {
        let ctx = this.game.canvas.getContext("2d");
        let color = this.randomColor();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };


    // hàm random màu sắc, tương ứng với điểm và thời gian hiển thị
    Hold.prototype.randomColor = function (game) {
        let red = '255,0,0';
        let green = '0,0,255';
        let blue = '0,255,0';
        let random = Math.floor(Math.random() * 10 + 1);
        switch (random) {

            // mỗi ô màu tương ứng với điểm và tên màu
            case 1: case 2: case 3: case 4: case 5:
                this.pointHold = 5;
                this.colorHold = 'red';
                this.timeHold = 1000;
                return "rgb(" + red + ")";
            case 7: case 8: case 6:
                this.pointHold = -5;
                this.colorHold = 'green';
                this.timeHold = 1000;
                return "rgb(" + green + ")";
            case 9: case 10:
                this.pointHold = 0;
                this.colorHold = 'blue';
                this.timeHold = 1000; // thời gian tồn tại của hold 1s
                return "rgb(" + blue + ")";
        }
    };


