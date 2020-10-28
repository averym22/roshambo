/// create rock paper sciorrs 

class Game {
    constructor(player, computer = null) {
        this.player = player;
        this.computer = computer;
    }

    turn () {
        console.log(`Player Chose ${this.player} Computer Chose ${this.computer}`)
        if (this.player === this.computer) {
            return 'Tie Game'
        }else if (this.player === 'rock' && this.computer === 'sc') {
            return 'player wins'
        }else if (this.player === 'rock' && this.computer === 'paper') {
            return 'computer wins'
        }else if (this.player === 'sc' && this.computer === 'paper') {
            return 'player wins'
        }else if (this.player === 'sc' && this.computer === 'rock') {
            return 'computer wins'
        }else if (this.player === 'paper' && this.computer === 'rock') {
            return 'player wins'
        }else if (this.player === 'paper' && this.computer === 'sc') {
            return 'computer wins'
        }
    }
    move () {
        let moves = ['rock', 'paper', 'sc']
        
        return this.computer = moves[Math.floor(Math.random() * 3)]
        }
}

let game1 = new Game('rock')
game1.move()
console.log(game1.turn())