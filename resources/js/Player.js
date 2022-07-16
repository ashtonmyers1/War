class Player {
    name;

    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card);
    }

    // loseCard(card) {
    //     this.hand.shift();
    // }

    playCard() {
        if (handIsEmpty()) {
            return null;
        }

        return this.hand.pop();
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getHand() {
        return this.hand;
    }

    setHand(newHand) {
        this.hand = newHand;
    }

    handIsEmpty() {
        return this.hand.length == 0;
    }

    handSize() {
        return this.hand.length;
    }

    getCard() {
        return this.hand.peek();
    }
}