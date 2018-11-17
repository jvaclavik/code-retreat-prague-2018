import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { evolve, compare, getAliveCoordinates } from "./libs"



describe("Comparison", ()=>{
  it('two different world doesnt equal', () => {
    const initialWorld = [
      [false],
    ] 
    const expectedWorld = [
      [true],
    ] 

    expect(compare(initialWorld, expectedWorld)).toBe(false)
  });
})

describe("Coordinates", ()=>{
  fit("", () => {
    const populatedWorld = [
      [true, false, true],
      [true, false, false],
      [false, true, false],
    ]
    const coordinates = [
      {x: 0, y: 0},
      {x: 2, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 2},
    ]
    expect(getAliveCoordinates(populatedWorld)).toBe(coordinates)
  }) 
})
describe("Evolution", ()=>{
  it('evolved to empty world', () => {
    const emptyWorld = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ] 
    expect(compare(evolve(emptyWorld), [])).toBe(true)
  });
  
  it('lonely cell dies', () => {
    const initialWorld = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ] 
    expect(compare(evolve(initialWorld), [])).toBe(true)
  });
  
  it('cell has 2 neighbours', () => {
    const initialWorld = [
      [false, false, false],
      [true, true, true],
      [false, false, false],
    ] 
    const expectedWorld = [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ] 
    expect(compare(evolve(initialWorld), expectedWorld)).toBe(true)
  });
})


