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

    console.log("Player cards:")
    for(let i = 0; i < this.player.hand.length; i++) {
      console.log(this.player.hand[i]);
    }

    console.log("Computer cards:")
    for(let i = 0; i < this.computer.hand.length; i++) {
      console.log(this.computer.hand[i]);
    }
  }

  playHand() {
    if (this.player.handSize() == 0 || this.computer.handSize() == 0) {
      this.getWinner();
    }

    console.log("Player card count before: " + this.player.handSize());
    console.log("Computer card count before: " + this.computer.handSize());

    let playerCard = this.player.playCard();
    let computerCard = this.computer.playCard();

    console.log("Player card count after: " + this.player.handSize());
    console.log("Computer card count after: " + this.computer.handSize());

    return [playerCard, computerCard];
  }

  compareHands(playerCard, computerCard) {

    /* playerCard = {
          value: 3,
          suit: 'hearts',
          rank: 3
        }
        computerCard = {
          value: 3,
          suit: 'spades',
          rank: 3
        } */
    console.log("playerCard rank: " + playerCard.rank + " computerCard rank: " + computerCard.rank);
    
    if (playerCard.rank > computerCard.rank) {
      this.player.receiveCard(playerCard);
      this.player.receiveCard(computerCard);

      console.log("Player card count after turn" + this.player.handSize());
      console.log("Computer card count after turn" + this.computer.handSize());
    } 
    
    else if (playerCard.rank < computerCard.rank) {
      this.computer.receiveCard(playerCard);
      this.computer.receiveCard(computerCard);

      console.log("Player card count after turn: " + this.player.handSize());
      console.log("Computer card count after turn: " + this.computer.handSize());
    } 
    
    else {
      this.war(playerCard, computerCard);
    }
  
  }

  war(pCard, cCard) {
   
    // check to see if a player has enough cards for war
    // if (this.isGameOverDuringWar()) {
    //   this.getWinner();
    //   return;
    // }

    // let isEqual = true;
    
    // do {
      // store current card in temp array
      this.playerTemp.push(pCard);
      this.computerTemp.push(cCard);

      // store 3 face down cards, and 1 face up card in temp array
      for (let i = 0; i < 4; i++) {
        this.playerTemp.push(this.player.playCard());
        this.computerTemp.push(this.computer.playCard());
      } 
      console.log('WAR');


      // compare last cards in temp array
      let lastPlayerCard = this.playerTemp.at(-1);
      let lastComputerCard = this.computerTemp.at(-1);

      console.log("Length of player array: " + this.playerTemp.length);
      console.log("Length of computer array: " + this.computerTemp.length);


      if (lastPlayerCard.rank > lastComputerCard.rank) {
        this.playerTemp.forEach(card => {
          this.player.receiveCard(card);
        })
        this.computerTemp.forEach(card => {
          this.player.receiveCard(card);
        })

        // isEqual = false;
      }

      else if (lastPlayerCard.rank < lastComputerCard.rank) {
        this.computerTemp.forEach(card => {
          this.computer.receiveCard(card);
        })
        this.playerTemp.forEach(card => {
          this.computer.receiveCard(card);
        })

        // isEqual = false;
      }
      
      else {
        this.war(lastPlayerCard, lastComputerCard);
        // pCard = this.player.playCard();
        // cCard = this.computer.playCard();
      }

      //break;
    // } while (isEqual)
    
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
