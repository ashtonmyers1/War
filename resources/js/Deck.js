class Deck {
  deck;

  constructor() {
    this.deck = [];
  }

  createDeck() {
    let suits = [ "spades", "hearts", "diams", "clubs" ]; 
    let values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]; 
    let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(new Card(suits[suit], values[value], ranks[value]));
      }
    }

    console.log("Testing deck initalization: ");
    for (let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i]);
    }
  }

  shuffle() {

    //Fisher-Yates Shuffle
    let i = this.deck.length;

    while (--i > 0) {
      //choose a random remaining element
      let randomIndex = Math.floor(Math.random() * (i + 1));
      
      let temp = this.deck[randomIndex];
      this.deck[randomIndex] = this.deck[i];
      this.deck[i] = temp; 
    }

    console.log("Testing shuffle: ");
    for (let index = 0; index < this.deck.length; index++) {
      console.log(this.deck[index]);
    }


    return this.deck;
  }

  deal() {
    if (this.isEmpty()) {
      return null;
    } 
    
    return this.deck.pop();
  }
    
  size() {
    return this.deck.length;
  }

  isEmpty() {
    return this.deck.length == 0;
  }

}
