class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
  }
  this.pickedCards = []
  this.pairsCliked = 0
  this.pairsGuessed = 0
}
// méthode Fisher–Yates shuffle
  shuffleCards() {
if (this.cards) {
}
function shuffle(thisCards) {
var m = thisCards.lenght, t, i;
while (m) {
  i = Math.floor(Math.random() * m--);
  t = this.cards [m]
  this.cards[m] = this.cards[i]
        this.cards[i] = t
      }
      return this.cards;
    } else {
      return undefined
    }

  }
  checkIfPair(card1, card2) {
    this.pairClicked += 1;
    if (card1 === card2) {
    this.pairGuessed +=1
    return true
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.card.lenght ==== 24) {
    return false;
  } 
  if (this.pairsGuessed === this.card.lenght/2) {
    return true;
  } else {
    return false;
  }
}
  shuffleCards() {}
  checkIfPair(card1, card2) {}
  isFinished() {}
}
