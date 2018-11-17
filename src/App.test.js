import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { calculateNeighboursForCell, calculateRow, evolve } from "./libs";

describe("calculateNeighbours", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("calculates neighbours of the lone cell", () => {
    const board = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    expect(calculateNeighboursForCell(board, 1, 1)).toBe(0);
  });

  it("calculates neighbours of the occupied cell", () => {
    const board = [[true, true, true], [true, true, true], [true, true, true]];
    expect(calculateNeighboursForCell(board, 1, 1)).toBe(8);
  });

  xit("calculates only neighbourhood of certain cell", () => {
    const board = [
      [true, false, false, false],
      [true, false, true, false],
      [true, false, false, false]
    ];
    expect(calculateNeighboursForCell(board, 2, 1)).toBe(0);
  });

});

describe("calculateRow", () => {
  it("evolves world", () => {
    const world = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const expected = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    expect(evolve(world)).toEqual(expected);
  })
});


describe("calculateRow", () => {
  it('gives 0 for falsy row', () => {
    expect(calculateRow([false, false, false])).toBe(0);
  })
  it('gives 3 for truthy row', () => {
    expect(calculateRow([true, true, true])).toBe(3);
  })
  it('gives 2 for truthy row', () => {
    expect(calculateRow([true, false, true])).toBe(2);
  })
});
