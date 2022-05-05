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
            let hasPieceInFront = board.getPiece(Square.at(location.row + 1, location.col));
            let hasPieceTwoInFront = board.getPiece(Square.at(location.row + 2, location.col));
            if (location.row > 1 && !hasPieceInFront) {
                array.push(Square.at(location.row + 1, location.col))
            } else if (location.row === 1 && !hasPieceInFront){
                array.push(Square.at(location.row + 1, location.col))
                if (!hasPieceTwoInFront){
                    array.push(Square.at(location.row + 2, location.col));
                }
            }
        } else {
            let hasPieceInFront = board.getPiece(Square.at(location.row - 1, location.col));
            let hasPieceTwoInFront = board.getPiece(Square.at(location.row - 2, location.col));
            if (location.row < 6 && !hasPieceInFront){
                array.push(Square.at(location.row - 1, location.col))
            } else if (location.row === 6 && !hasPieceInFront) {
                array.push(Square.at(location.row - 1, location.col));
                if (!hasPieceTwoInFront){
                    array.push(Square.at(location.row - 2, location.col));
                }
            }
        }
        
        return array
    }
}
