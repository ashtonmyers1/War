class Game {

  constructor() {
    this.playerTemp = [];
    this.computerTemp = [];
    this.player = new Player();
    this.computer = new Player();
    this.cardDeck = new Deck();
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

  playHand() {
    if (this.player.handSize() == 0 || this.computer.handSize() == 0) {
      this.getWinner();
    }

    let playerCard = this.player.playCard();
    let computerCard = this.computer.playCard();

    return [playerCard, computerCard];
  }

  compareHands(playerCard, computerCard) {
    
    if (playerCard.rank > computerCard.rank) {
      this.player.receiveCard(playerCard);
      this.player.receiveCard(computerCard);
    } 
    
    else if (playerCard.rank < computerCard.rank) {
      this.computer.receiveCard(playerCard);
      this.computer.receiveCard(computerCard);
    } 
    
    else {
      this.war(playerCard, computerCard);
    }
  
  }

  war(pCard, cCard) {

    // check to see if a player has enough cards for war
    if (this.isGameOverDuringWar()) {
      this.getWinner();
      return;
    }

    let isEqual = true;
    
    do {
      // store current card in temp array
      this.playerTemp.push(pCard);
      this.computerTemp.push(cCard);

      // store 3 face down cards, and 1 face up card in temp array
      for (let i = 0; i < 3; i++) {
        this.playerTemp.push(this.player.playCard());
        this.computerTemp.push(this.computer.playCard());

        console.log("Cards in player temp array: " + this.playerTemp);
        console.log("Cards in computer temp array: " + this.computerTemp);
      } 

      // compare last cards in temp array
      let lastPlayerCard = this.playerTemp[this.playerTemp.length-1];
      let lastComputerCard = this.computerTemp[this.computerTemp.length-1];
      
      if (lastPlayerCard > lastComputerCard) {
        for (let i = 0; i < lastPlayerCard.length - 1; i++) {
          this.player.hand.receiveCard(this.playerTemp.pop());
          this.player.hand.receiveCard(this.computerTemp.pop());
        }

        isEqual = false;
      }

      else if (lastPlayerCard < lastComputerCard) {
        for (let i = 0; i < lastPlayerCard.length - 1; i++) {
          this.computer.hand.receiveCard(this.playerTemp.pop());
          this.computer.hand.receiveCard(this.computerTemp.pop());
        }

        isEqual = false;
      } 
      
    } while (isEqual)
    
  }

  isGameOverDuringWar() {
    if (this.player.handSize() < 3 || this.computer.handSize() < 3) {
      return true;
    }  

    return false;
  }

  getWinner() {
    if (this.player.handSize() > this.computer.handSize()) {
      console.log(this.player + "has won the game"); 
      return this.player;
    } 
    
    else {
      console.log(this.computer + "has won the game");
      return this.computer;
    }
  }

}
