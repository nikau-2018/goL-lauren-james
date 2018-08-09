const initialState = require('../game')

test('create life on the board', function () {
  // Arrange
  const boardSize = 3
  const emptyBoard = initialState.createBoard(boardSize)
  const expected = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
  // Assert
  const actual = initialState.initialState(emptyBoard)
  // Act
  expect(actual).toEqual(expected)
})