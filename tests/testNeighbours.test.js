const testNeighbours = require('../game')

test('test neighbouring cells', function () {
  // arrange
  const boardSize = 3
  const board =
  [ [1, 1, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1]]
  const rowIndex = 2
  const colIndex = 2
  const expected = 3
  // assert
  const actual = testNeighbours.testNeighbours(rowIndex, colIndex, board)
  // act
  expect(actual).toEqual(expected)
})
