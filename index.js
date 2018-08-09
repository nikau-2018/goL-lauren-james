module.exports = {
  createBoard
}

function createBoard (line) {
  const board = []
  for (let i = 0; i < 3; i++) {
    board.push(line)
  }
  return board
}
