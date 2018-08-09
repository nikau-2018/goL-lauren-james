module.exports = {
  createBoard
}

function createBoard (boardSize) {
  const board = []
  const line = []
  for (let i = 0; i < boardSize; i++) {
    line.push(0)
  }
  for (let i = 0; i < boardSize; i++) {
    board.push(line)
  }
  return board
}
