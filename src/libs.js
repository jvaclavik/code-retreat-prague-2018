export const calculateNeighboursForCell = (board, x, y) => {
  const neighbourhood = getNeighbourhood(board, x, y)

  return calculateNeighbourhood(neighbourhood, board[x][y])
}

export const calculateNeighbourhood = (neighbourhood, isCellAlive) => {
  const count = neighbourhood.reduce((acc, row) => {
    return calculateRow(row) + acc
  }, 0)

  if(isCellAlive) {
    return count - 1
  } 
  return count
}

export const getNeighbourhood = (board, x, y) => {

  return board
}

export const calculateRow = (row) => 
  row.reduce((acc, curr) => {
    if(curr) {
      return acc + 1
    }
    return acc
  }, 0)

export const evolve = (world) => {
  for(let y = 0; y< world.length; y++) {
    for(let x = 0; x< world.length; x++) {
      calculateNeighboursForCell(world, x, y)
    }
  }
}