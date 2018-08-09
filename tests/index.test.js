const boardBuild = require('../index')

test('create board', function () {
  // arrange
  const line = [0, 0, 0]
  const board = []
  const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  // assert
  const actual = boardBuild.createBoard(line)
  // act
  expect(actual).toEqual(expected)
})
