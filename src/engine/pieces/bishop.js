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
            array.push(Square.at(location.row + i, location.col + i));
        }

        for (let i= 1 ; location.row - i >= 0 && location.col - i >= 0; i++){
            array.push(Square.at(location.row - i, location.col - i));
        }

        for (let i= 1 ; location.row + i <=7 && location.col - i >= 0; i++){
            array.push(Square.at(location.row + i, location.col - i));
        }

        for (let i= 1 ; location.col + i <=7 && location.row - i >= 0; i++){
            array.push(Square.at(location.row - i,location.col + i));
        }


        console.log(array);
        return array;
    }
}
