
export class TicTacToe {
    n:number;
    board:number[][];

    constructor(n:number) {
        this.board = new Array(n).fill([]).map(x => new Array(n).fill(" "));
        this.n = n;
    }

    move(row: number, col: number, player: number):number { // 1 if player 1 wins, 2 if player 2 wins
        this.board[row][col] = player;
        if (this.checkIfGameEnded(player, row, col)) {
            return player;
        } else {
            return 0;
        }
    }

    private checkDiagonal(player: number) {
        for (let i = 0; i < this.n; i++) {
            if (this.board[i][i] !== player) return false;
        }
        return true;
    }

    private checkAntiDiagonal(player: number) {
        for(let i = this.n-1; i >= 0; i--) {
            if (this.board[i][this.n - i - 1] !== player) return false;
        }
        return true;
    }

    private checkColumn(player: number, col: number) {
        for(let i = 0; i < this.n; i++) {
            if (this.board[i][col] !== player) return false;
        }
        return true;
    }

    private checkRow(player: number, row: number) {
        for (let i = 0; i < this.n; i++) {
            if (this.board[row][i] !== player) return false;
        }
        return true;
    }

    checkIfGameEnded(player: number, row: number, col: number) {
        return this.checkDiagonal(player) ||
            this.checkAntiDiagonal(player) ||
            this.checkColumn(player, col) ||
            this.checkRow(player, row)
    }
}