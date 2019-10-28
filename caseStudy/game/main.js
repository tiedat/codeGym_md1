var targetBoard = document.getElementById("gameJDKANG");
var game = new Game(targetBoard);
game.createHold();
game.showHold();
setInterval(function () {
    game.showHold();
    console.log(game.holds);
},2000);
game.click();