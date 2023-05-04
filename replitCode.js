// Num Array
const numArray = [0, 1, 2, 3, 4]

// .forEach() ------------------------------------

// Declaration Version
numArray.forEach(function(number, index) {
    console.log(`${number} is at index ${index}`)
})

// Arrow Version
numArray.forEach((elem, i) => {
    return console.log(`${elem} is at index ${i}`)
})

// .map() ------------------------------------

// Declaration Version
const mappedArrD = numArray.map(function(num){
    return num += 2
})

// Arrow Version
const mappedArrA = numArray.map(num => {
    return num += 2
})

// For Loop Version
const cb = (arr) => {
    for(let i = 0; i < arr.length; i++){
      arr[i] += 2
    }
    return arr
}

// All three of these do exactly the same thing, just in different ways.

// .filter() ------------------------------------

// Declaration Version
const filteredArrD = numArray.filter(function(element){
    return element % 2 === 0
})

// Arrow Version
const filteredArrA = numArray.filter(element => element % 2 === 0)

// .reduce() ------------------------------------

// Declaration Version
const reducedDec = numArray.reduce(function(acc, curr){
    return acc + curr
})

// Arrow Version
const reduced = numArray.reduce((acc, curr) => acc + curr)

// Initial Value
const newReduced = numArray.reduce((a, c, i) => {
    console.log(i)
    return a + c
  }, 10)

// Chaining --------------------------------------

const myNumImp = numArray.filter(num => num > 2).map(num => num * 3).reduce((acc, curr) => acc - curr)

const myNumEx = numArray.filter(num => {
    // console.log(num)
    return num > 2
  }).map(num => {
    // console.log(num)
    return num * 3
  }).reduce((acc, curr) => {
    // console.log(curr)
    return acc - curr
  })