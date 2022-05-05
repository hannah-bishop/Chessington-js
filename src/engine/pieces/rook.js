import Piece from './piece';
import Square from '../square';
export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let array = []

        // for (let i=location.col; i<=7; i++){
        //     let blocking = board.getPiece(Square.at(location.row, i))
        //     if (!blocking){
        //         array.push(Square.at(location.row, i))
        //     } else {
        //         break
        //     }
        // }

        // for (let i=location.col; i>=0; i--){
        //     let blocking = board.getPiece(Square.at(location.row, i))
        //     if (!blocking){
        //         array.push(Square.at(location.row, i))
        //     } else {
        //         break
        //     }
        // }

        // for (let i=location.row; i<=7; i++){
        //     let blocking = board.getPiece(Square.at(i, location.col))
        //     if (!blocking){
        //         array.push(Square.at(i, location.col))
        //     } else {
        //         console.log('breaking')
        //         break
        //     }
        // }

        // for (let i=location.row; i>=0; i--){
        //     let blocking = board.getPiece(Square.at(i, location.col))
        //     if (!blocking){
        //         array.push(Square.at(i, location.col))
        //     } else {
        //         break
        //     }
        // }


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

        return array;
    }
}
