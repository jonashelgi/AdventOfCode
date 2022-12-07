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
file.map((item) => {
  len = item.length
  half = len / 2
  first = item.slice(0, half)
  sec = item.slice(half, len)
  for (i = 0; i < first.length; i++) {
    for (j = 0; j < sec.length; j++) {
      if (first[i] === sec[j]) {
        total = total + convert(first[i])
        i = first.length + 10
      }
    }
  }
})
console.log(total)
