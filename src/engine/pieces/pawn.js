import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let array =[]
        let location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            if (location.row > 1) {
                array.push(Square.at(location.row + 1, location.col))
            } else {
                array.push(Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col))
            }
        } else {
            if (location.row < 6){
                array.push(Square.at(location.row - 1, location.col))
            } else {
                array.push(Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col))
            }
            
        }
        return array
    }
}
