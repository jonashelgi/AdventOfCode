import { readFileSync } from 'fs'
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day2/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

const win = {
  A: 'Y',
  B: 'Z',
  C: 'X',
}

const tie = {
  A: 'X',
  B: 'Y',
  C: 'Z',
}
const score = {
  Z: 3,
  X: 1,
  Y: 2,
}

var total = 0
file.map((item) => {
  if (win[item[0]].includes(item[2])) {
    total += 6
  } else if (tie[item[0]].includes(item[2])) {
    total += 3
  }
  total += Number(score[item[2]])
})

console.log(total)
