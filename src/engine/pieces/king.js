import Piece from './piece';
import Square from '../square';
export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let array = []

        array.push(Square.at(location.row + 1, location.col + 1))
        array.push(Square.at(location.row + 1, location.col - 1))
        array.push(Square.at(location.row - 1, location.col - 1))
        array.push(Square.at(location.row - 1, location.col + 1))
        array.push(Square.at(location.row + 1, location.col))
        array.push(Square.at(location.row - 1, location.col))
        array.push(Square.at(location.row, location.col + 1))
        array.push(Square.at(location.row, location.col + -1))

        let filteredArray = array.filter(square => square.col >= 0 && square.row >= 0 && square.col <= 7 && square.row <= 7);
        return filteredArray;
    }
}
