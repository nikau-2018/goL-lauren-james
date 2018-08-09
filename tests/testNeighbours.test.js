const testNeighbours = require('../game')

test('test neighbouring cells', function () {
  // arrange
  const boardSize = 3
  const board = testNeighbours.createBoard(boardSize)
  const initialState = testNeighbours.initialState(initialState)
  // assert
  const actual = testNeighbours.testNeighbours()
})

