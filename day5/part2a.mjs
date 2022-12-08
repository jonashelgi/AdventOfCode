import { readFileSync } from 'fs'
const location = 'C:/Users/jonashs/source/repos/adventofcoding/day5/input.txt'
const file = readFileSync(location, 'utf-8').split(/\r?\n/)

var map = {
  1: ['R', 'N', 'P', 'G'],
  2: ['T', 'J', 'B', 'L', 'C', 'S', 'V', 'H'],
  3: ['T', 'D', 'B', 'M', 'N', 'L'],
  4: ['R', 'V', 'P', 'S', 'B'],
  5: ['G', 'C', 'Q', 'S', 'W', 'M', 'V', 'H'],
  6: ['W', 'Q', 'S', 'C', 'D', 'B', 'J'],
  7: ['F', 'Q', 'L'],
  8: ['W', 'M', 'H', 'T', 'D', 'L', 'F', 'V'],
  9: ['L', 'P', 'B', 'V', 'M', 'J', 'F'],
}

const cleanFile = file.map((item) => item.split(' ').filter((f) => !isNaN(f)))
const numFile = cleanFile.map((item) => item.map((subItem) => Number(subItem)))
numFile.map((item) => {
  var temp = []
  for (var i = 0; i < item[0]; i++) {
    const len = map[item[1]].length - 1
    temp.push(map[item[1]][len])
    map[item[1]].pop()
  }
  temp.reverse()
  for (var val of temp) {
    map[item[2]].push(val)
  }
})
console.log(map)
