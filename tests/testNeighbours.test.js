const testNeighbours = require('../game')

test('test neighbouring cells', function () {
  // arrange
  const boardSize = 3
  const emptyBoard = testNeighbours.createBoard(boardSize)
  const aliveBoard = testNeighbours.initialState(emptyBoard)
  const expected = 1
  // assert
  const actual = testNeighbours.testNeighbours(aliveBoard)
  // act
  expect(actual).toBe(expected)
})

