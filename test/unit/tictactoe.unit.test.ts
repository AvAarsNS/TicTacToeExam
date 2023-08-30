/* eslint-disable @typescript-eslint/dot-notation */
import { TicTacToe } from "../../src/tictactoe";
import { Cell, Mark } from "../../src/cell";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("This is a test suite for units of the TicTacToe game", () => {
  let game = new TicTacToe();

  describe("A new game board needs to be initialized", () => {
    game = new TicTacToe();

    it("with 3 rows", () => {
      expect(game.board.length).toBe(3);
    });

    it("with 3 columns", () => {
      game.board.every((row) => expect(row.length).toBe(3));
    });

    it("with all cells empty", () => {
      expect(
        game.board
          .flat()
          .every(
            (cell) => cell instanceof Cell && cell.getValue() === undefined
          )
      ).toBeTruthy();
    });
  });

  describe("A player should be able to place his mark at a given position", () => {
    beforeEach(() => {
      game = new TicTacToe();
    });

    it("Putting a mark somewhere should only change one cell", () => {
      const spiedCell = jest.spyOn(Cell.prototype, "place");

      game["placeMark"]("X", 1, 1);

      expect(spiedCell).toBeCalledTimes(1);
    });
    describe("A player should be able to", () => {
      test.each([
        ["X", 0, 0],
        ["O", 1, 0],
        ["X", 2, 2],
      ] as [Mark, number, number][])(
        "place an %s at (%i, %i)",
        (mark, row, column) => {
          game["placeMark"](mark, row, column);

          expect(game.board[row][column].getValue()).toEqual(mark);
        }
      );
    });
  });
});
