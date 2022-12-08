import { readFileSync } from 'fs'
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day3/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

const convert = (str) => {
  var out = 0
  if (str == str.toUpperCase()) {
    out = out + 26
  }
  return (out += str.toUpperCase().charCodeAt(0) - 64)
}

var total = 0

const getNumber = (file, s) => {
  for (var first of file[s - 2]) {
    for (var sec of file[s - 1]) {
      for (var third of file[s]) {
        if (
          first === sec &&
          first === third &&
          sec === third
        ) {
          total = total + convert(first)
          return
        }
      }
    }
  }
}

for (var s = 2; s < file.length; s += 3) {
  getNumber(file, s)
}
console.log(total)

