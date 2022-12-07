const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}
const file = syncReadFile('C:/Users/jonashs/source/repos/adventofcoding/day2/input.txt')


const val = {
  X: 0,
  Y: 3,
  Z: 6,
}

const stat = {
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

var total = 0
file.map((item) => {
  total += Number(val[item[2]])
  total += Number(stat[`${item[0]}${item[2]}`])
})

console.log(total)