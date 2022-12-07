const { readFileSync } = require('fs')
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day3/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

function convert(str) {
  out = 0
  len = str.length
  if (str == str.toUpperCase()) {
    out = out + 26
  }
  return (out += str.toUpperCase().charCodeAt(0) - 64)
}

total = 0

for (s = 2; s < file.length; s += 3) {
  var i = file[s - 2].length
  for (i = 0; i < file[s - 2].length; i++) {
    for (j = 0; j < file[s - 1].length; j++) {
      for (y = 0; y < file[s].length; y++) {
        if (
          file[s - 2][i] === file[s - 1][j] &&
          file[s - 2][i] === file[s][y] &&
          file[s - 1][j] === file[s][y]
        ) {
          total = total + convert(file[s - 2][i])
          i = file[s - 2].length + 10
        }
      }
    }
  }
}
console.log(total)
