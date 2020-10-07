
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((m, i) => i % 2 === 0 ? m : m.reverse()).flat(1) : []
}
