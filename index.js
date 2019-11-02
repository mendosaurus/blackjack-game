// Simplified rules
// Player starts with 0 points
// Player can ask to play or to stand
// If a player decides to play, a new card would be given to him
// If he hits 21, player wins!
//     If the total is above 21, player looses!
//     If the total is below 21, he will be asked again
// If he stands, the total will reset

function BlackjackGame() {
    this.total = 0;
    this.card = 0;
    this.nextCard = function () {
        this.card = parseInt((Math.random() * 13) + 1); // number between 1-13
        console.log("Next Card... " + this.card);
    };
    this.play = function () {
        this.nextCard();
        this.total += this.card;
        this.checkResult();
    };
    this.stand = function () {
        this.total = 0;
        console.log("Scared huh? Let's start again");
    };
    this.checkResult = function () {
        console.log("Total = " + this.total);
        if (this.total > 21) {
            console.log("You lost! Play Again?")
            this.total = 0;
        } else if (this.total == 21) {
            console.log("You won!  Play Again?")
            this.total = 0;
        }
    };
}