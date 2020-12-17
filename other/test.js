var array = [1, 2, 3, 3, 4, 5]

var uniq = array
    .map((number) => {
        return {
            count: 1,
            number: number
        }
    })
    .reduce((a, b) => {
        a[b.number] = (a[b.number] || 0) + b.count
        return a
    }, {})

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log(duplicates)