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
            if (location.row === 7) {
                console.log(array);
                return array;
            }
            let hasPieceInFront = board.getPiece(Square.at(location.row + 1, location.col));
            let hasPieceTwoInFront = board.getPiece(Square.at(location.row + 2, location.col));

            if (!hasPieceInFront) {
                array.push(Square.at(location.row + 1, location.col));
                if (location.row === 1 && !hasPieceTwoInFront) {
                    array.push(Square.at(location.row + 2, location.col));
                }
            }
        } else {
            if (location.row === 0) {
                console.log(array);
                return array;
            }
            let hasPieceInFront = board.getPiece(Square.at(location.row - 1, location.col));
            let hasPieceTwoInFront = board.getPiece(Square.at(location.row - 2, location.col));
                if (!hasPieceInFront) {
                    array.push(Square.at(location.row - 1, location.col)); 
                    if (location.row === 6 && !hasPieceTwoInFront) {
                        array.push(Square.at(location.row - 2, location.col));
        
                    }
                } 
            
        } //console.log(array) 
        return array
    }
}
