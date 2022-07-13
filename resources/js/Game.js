class Game {

  isFirstHand;

  constructor() {
    this.isFirstHand = true;
    this.temp = [];
    this.player = new Player();
    this.computer = new Player();
    this.cardDeck = new Deck();
  }

  play() {
    // play cards
    let card1 = this.player.playCard();
    let card2 = this.computer.playCard();

    return [card1, card2];
    if (card1.compareRank(card2) > 0) {
      //player has won round, receives both cards
      this.player.receiveCard(card1);
      this.player.receiveCard(card2);
      this.computer.loseCard(card2);
    } 
    
    else if(card1.compareRank(card2) < 0) {
      //computer has won round, receives both cards
      this.computer.receiveCard(card2);
      this.computer.receiveCard(card1);
      this.computer.loseCard(card1);
    }

    else {
      //war

      //place 3 cards face down and store in temp array
      
    }

  }

  playWar() {
    // remove 4 cards from hand and store in temp
    while (!isEmpty() && index < 4) {
        this.temp.push() = this.hand.shift();
        playCard()
    }
}

  isFirstHand() {

  }

  battle() {
    this.player.giveCard()
  }
  war() {

    
  }

  winHand() {

  }

  loseHand() {

  }

  tieHand() {

  }

  isGameOver() {

  }

  isNewGame() {
    //check if this is a new Game
    if (isFirstHand) {
      isFirstHand = false;
    } 
  }

  setupNewGame() {
    this.cardDeck.createDeck();
    this.cardDeck.shuffle();

    // deal cards
    while (this.cardDeck.size() >= 2) {
      this.player.receiveCard(this.cardDeck.deal());
      this.computer.receiveCard(this.cardDeck.deal());
    }
  }



}
