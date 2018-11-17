export const evolve = (world) => {
  return world
}

export const compare = (world1, world2) => {
  
  return true
}

export const getAliveCoordinates = (world) => 
  world.reduce((acc, row, rowIndex) => [
    ...acc,
    row.reduce((acc2, curr2, index) => 
      curr2 ? [...acc2, {x: index, y: rowIndex}] : acc2
    , [])
  ], []
  )

/*
[
  [0, 2],
  [0, 1],
]

=>

[
  [{x: 0, y:0},{x: 2, y:0},]
  [{x: 0, y:1},{x: 1, y:1},]
  ...
]
*/

  // [true, false, true] => [0, 2]
  
  

  /*[].filter((cell, index) => {
    if(world[y][x]) array.push({x, y})
  })

  for(let y = 0; y<world.length; y++){
    for(let x = 0; x<world[y].length; x++){
      if(world[y][x]) array.push({x, y})
    }
  }
  */
 