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

const getNumber = (item) => {
  const len = item.length
  const half = len / 2
  const first = item.slice(0, half)
  const sec = item.slice(half, len)
  for (var f of first) {
    for (var s of sec) {
      if (f === s) {
        total = total + convert(f)
        return
      }
    }
  }
}

file.map((item) => {
  getNumber(item)
})


console.log(total)
