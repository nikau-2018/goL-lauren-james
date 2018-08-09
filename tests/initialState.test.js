const boardBuild = require('../game')

test('create life on the board', function () {
  // Arrange
  const boardSize = 3
  const board = boardBuild.createBoard(boardSize)
  const expected = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
  // Assert
  const actual = boardBuild.initialState(board)
  // Act
  expect(actual).toEqual(expected)
})