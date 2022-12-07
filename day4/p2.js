const { readFileSync, promises: fsPromises } = require('fs')

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)
  return arr
}
const file = syncReadFile(
  'C:/Users/jonashs/source/repos/adventofcoding/day4/input.txt'
)

total = 0

for (let i = 0; i < file.length; i++) {
  text = file[i].split('-')
  text[1] = text[1].split(',')
  text = text.flat()
  num = text.map((item) => Number(item))
  for(var j = num[0]; j <= num[1]; j++) {
    if(j >= num[2] && j <= num[3]) {
      total += 1
      break
    }
  }
}

console.log(total)