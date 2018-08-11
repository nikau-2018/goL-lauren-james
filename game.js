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

function testNeighbours (rowIndex, colIndex, board) {
  const neighbourArray = []
  const startRowIndex = rowIndex - 1
  const startColIndex = colIndex - 1
  const endRowIndex = rowIndex + 1
  const endColIndex = colIndex + 1

  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      neighbourArray.push(board[startRowIndex + i][startColIndex])
      neighbourArray.push(board[startRowIndex + i][startColIndex + 1])
    } else {
      for (let e = 0; e < 3; e++) {
        neighbourArray.push(board[startRowIndex + i][startColIndex + e])
      }
    }
  }
  return neighbourArray
}
