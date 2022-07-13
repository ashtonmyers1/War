class Player {
    name;

    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card);
    }

    loseCard(card) {
        this.hand.shift();
    }

    playCard() {
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

    isEmpty() {
        return this.hand.length == 0;
    }
}