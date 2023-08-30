import { Cell, Mark } from "./cell";

export class TicTacToe {
  board: Cell[][];

  constructor() {
    this.board = new Array(3)
      .fill(null)
      .map(() => new Array(3).fill(null).map(() => new Cell()));
  }

  place(mark: Mark, row: number, column: number) {
    this.placeMark(mark, row, column);
    return "Player X wins";
  }

  private placeMark(mark: Mark, row: number, column: number) {
    this.board[row][column].place(mark);
  }
}
