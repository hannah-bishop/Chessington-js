import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
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
        
        for (let i = location.col+1; i <= 7; i++) {
            let blocking = board.getPiece(Square.at(location.row, i))
            if (!blocking){
                array.push(Square.at(location.row, i))
            } else {
                break
            }
        }

        for (let i = location.col-1; i >= 0; i--) {
            let blocking = board.getPiece(Square.at(location.row, i))
            if (!blocking){
                array.push(Square.at(location.row, i))
            } else {
                break
            }
        }

        for (let i = location.row+1; i <= 7; i++) {
            let blocking = board.getPiece(Square.at(i, location.col))
            if (!blocking){
                array.push(Square.at(i, location.col))
            } else {
                break
            }
        }

        for (let i = location.row-1; i >= 0; i--) {
            let blocking = board.getPiece(Square.at(i, location.col))
            if (!blocking){
                array.push(Square.at(i, location.col))
            } else {
                break
            }
        }

        //let filteredArray = array.filter(square => square.row !== location.row || square.col !== location.col);
        return array;
    }
}
