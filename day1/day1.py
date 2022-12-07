
f = open('C:/Users/jonashs/source/repos/adventofcoding/day1/input.txt', 'r')
c = f.readlines()
max = 0
total = 0
list = []
for line in c:
    if (line.strip()):
        total = total + int(line)
    else:
        list.append(total)
        total = 0

list.sort(reverse=True)
print(list[0] + list[1] + list[2])
