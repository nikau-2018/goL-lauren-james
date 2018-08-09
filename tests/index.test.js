const board = require('../index').createBoard

test('create board', function () {
  // arrange
  const line = [0, 0, 0]
  const board = []
  const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  // assert
  const actual = board.createBoard(line)
  // act
  expect(actual).toBe(expected)
})
