module.exports = {
  createBoard,
  initialState,
  testNeighbours
}
const board = []
const line = []

function createBoard (boardSize) {
  for (let i = 0; i < boardSize; i++) {
    line.push(0)
  }
  for (let i = 0; i < boardSize; i++) {
    board.push(line)
  }
  return board
}

function initialState (board) {
  for (let i = 0; i < board.length; i++) {
    for (let e = 0; e < board[i].length; e++) {
      board[i][e] = 1
    }
  }
  return board
}

function testNeighbours (position) {
  let aliveNeighbours = 0
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x + 1] === 1) {
        aliveNeighbours++
        return aliveNeighbours
      } 
    }
  } 
}
