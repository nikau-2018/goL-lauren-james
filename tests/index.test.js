const boardBuild = require('../index')

test('create board', function () {
  // arrange
  const boardSize = 3
  const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  // assert
  const actual = boardBuild.createBoard(boardSize)
  // act
  expect(actual).toEqual(expected)
})
