//Food tip calculator
food = Number(prompt('how much was the food?'))
tipPercent = Number(prompt('tip %')/100)
tipAmount = food*tipPercent
total = food + tipAmount

console.log("Tip: ", tipAmount)
console.log("Total", total)
//alert(tipAmount)

//Baby weather app (conditional)

let weather = prompt("How is the weather?")
if (weather == 'rainy') {
  console.log("Grab your umbrella")
}
else {
  console.log("Wear your sunglases")
}

// calculating total food bill with function
function calculateFoodTotal(food, tip) {
  const tipPercent = tip / 100
  const tipAmount = food * tipPercent
  const total = sum(food, tipAmount)

  return total
}

console.log(calculateFoodTotal(400, 20))


//ES6
//Arrow function =>
//arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}

// //arrow function with implicit return
const sum = (a, b) => a + b
console.log(sum(10, 20))

//Maths
function add(a, b) {
 return a + b
}

console.log(add(5, 7))

function sub(a,b) {
  return a - b
}

console.log(sub(8, 3))

function mult(a, b) {
  return a*b
}

console.log(mult(4, 4))

function div(a, b) {
  return a/b
}
console.log(div(9, 3))

function subs(a, b, c) {
  return a - b + c
}

console.log(subs(1, 2, 3))

//Arrays
const groceries = ['banana', 'apple', 'orange', 'pear' ]
console.log(groceries)
console.log(groceries[3])
groceries.push('mango')
console.log(groceries)

console.log(groceries.slice(1, 4))

console.log(groceries,indexOf('orange'))

// Objects 
const person = {name: 'Leonardo', shirt: 'white'}

console.log(person.shirt)
console.log(person['name'])

//assign object
person.phone = '11-22-333-4444'
console.log(person.phone)

console.log(person)

//person 2 
const person2 = {name: 'Redwan', shirt: 'Grey'}
console.log(person2)

console.log(person2.name) 

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function() {
    return this.assets - this.liabilities
    }
  }
  
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.netWorth()}`

  return intro
}

console.log(introducer('Redwan', 'Grey'))
