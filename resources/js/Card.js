class Card {
    constructor(suit, value, rank) {
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }

    compareRank(opponentCard) {
        return this.getRank() - opponentCard.getRank();
    }

    isEqual(opponentCard) {
        if (this.getRank() == opponentCard.getRank()) {
            return true;
        } else {
            return false;
        }
    }

    getValue() {
        return this.value;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }
}