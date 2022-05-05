import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let array = []

        for (let i= 1 ; location.row + i <= 7 && location.col + i <= 7; i++){
            let blocking = board.getPiece(Square.at(location.row + i, location.col + i));
            if (!blocking){
                array.push(Square.at(location.row + i, location.col + i));
            } else {
                break
            }
        }

        for (let i= 1 ; location.row - i >= 0 && location.col - i >= 0; i++){
            let blocking = board.getPiece(Square.at(location.row - i, location.col - i));
            if (!blocking){
                array.push(Square.at(location.row - i, location.col - i));
            } else {
                break
            }
        }

        for (let i= 1 ; location.row + i <=7 && location.col - i >= 0; i++){
            let blocking = board.getPiece(Square.at(location.row + i, location.col - i));
            if (!blocking){
                array.push(Square.at(location.row + i, location.col - i));
            } else {
                break
            }
        }

        for (let i= 1 ; location.col + i <=7 && location.row - i >= 0; i++){
            let blocking = board.getPiece(Square.at(location.row - i, location.col + i));
            if (!blocking){
                array.push(Square.at(location.row - i, location.col + i));
            } else {
                break
            }
        }


        return array;
    }
}
