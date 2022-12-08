import { readFileSync } from 'fs'
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day4/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

var total = 0
file.forEach((item) => {
  var text = item.split('-')
  text[1] = text[1].split(',')
  const num = text.flat().map((item) => Number(item))
  for (var j = num[0]; j <= num[1]; j++) {
    if (j >= num[2] && j <= num[3]) {
      total += 1
      break
    }
  }
})

console.log(total)
