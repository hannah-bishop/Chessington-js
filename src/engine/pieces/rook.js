import Piece from './piece';
import Square from '../square';
export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let array = []

        for (let i = 0; i <= 7; i++) {
            array.push(Square.at(location.row, i))
        }

        for (let i = 0; i <= 7; i++) {
            array.push(Square.at(i, location.col))
        }

        let filteredArray = array.filter(square => square.row !== location.row || square.col !== location.col);
        return filteredArray;
    }
}
