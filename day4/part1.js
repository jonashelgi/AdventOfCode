const { readFileSync } = require('fs')
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day4/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

total = 0
file.forEach((item) => {
  text = item.split('-')
  text[1] = text[1].split(',')
  num = text.flat().map((item) => Number(item))
  if (num[2] <= num[0] && num[3] >= num[1]) {
    total += 1
  } else if (num[2] >= num[0] && num[1] >= num[3]) {
    total += 1
  }
})

console.log(total)
