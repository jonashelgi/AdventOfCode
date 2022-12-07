const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  return arr;
}
const file = syncReadFile('C:/Users/jonashs/source/repos/adventofcoding/day2/input.txt')
// Rock A => Y
// Paper B => X
// Scissors C => Z 

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
  if(win[item[0]].includes(item[2])){
    total += 6
  }
  else if(tie[item[0]].includes(item[2])){
    total += 3
  }
  total += Number(score[item[2]])
})

console.log(total)
