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
var first = ''
var sec = ''
file.map((item) => {
  const lens = item.length
  first = item.slice(0, lens / 2)
  sec = item.slice(lens / 2, lens)
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < sec.length; j++) {
      if (first[i] === sec[j]) {
        total = total + convert(first[i])
        i = first.length+ 10
      }
    }
  }
})
console.log(total)
