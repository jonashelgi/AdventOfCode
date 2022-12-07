const { readFileSync } = require('fs')
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day2/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

val = {
  X: 0,
  Y: 3,
  Z: 6,
}

stat = {
  AY: 1,
  AX: 3,
  AZ: 2,

  BY: 2,
  BX: 1,
  BZ: 3,

  CY: 3,
  CX: 2,
  CZ: 1,
}

total = 0
file.map((item) => {
  total += Number(val[item[2]])
  total += Number(stat[`${item[0]}${item[2]}`])
})

console.log(total)
