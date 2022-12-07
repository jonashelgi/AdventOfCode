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
file.map((item) => {
  text = item.split('-')
  text[1] = text[1].split(',')
  text = text.flat()
  num = text.map((item) => Number(item))
  if(num[2] <= num[0] && num[3] >= num[1]) {
    total += 1
  }
  else if(num[2] >= num[0] && num[1] >= num[3]) {
    total += 1
  }
})
console.log(total)

// 2<0 og 3 > 1

// 0 < 2 og 1 > 3