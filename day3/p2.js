const { readFileSync, promises: fsPromises } = require('fs')

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)
  return arr
}
const file = syncReadFile(
  'C:/Users/jonashs/source/repos/adventofcoding/day3/input.txt'
)

function convert(str) {
  let out = 0,
  len = str.length
  if(str == str.toUpperCase()) {
    out = out + 26
  }
  str = str.toUpperCase()
  for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1)
  }

  return out
}

var total = 0

for(var s = 2; s < file.length; s+=3) {
  for (var i = 0; i < file[s-2].length; i++) {
    for (var j = 0; j < file[s-1].length; j++) {
      for (var y = 0; y < file[s].length; y++) {
        if (file[s-2][i] === file[s-1][j] && file[s-2][i] === file[s][y] && file[s-1][j] === file[s][y]) {
          console.log(file[s-2][i])
          total = total + convert(file[s-2][i])
          i = file[s-2].length+ 10
        }
      }
    }
  }
}
console.log(total)
