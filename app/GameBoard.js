class GameBoard {
    
    // //game;

    constructor() {
        this.game = new Game();
        console.log(this.game);
    }

    newGame() {
        this.game.setupNewGame();
    }

}