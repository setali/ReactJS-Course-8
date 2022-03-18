function counterClosure () {
  var counter = 0

  function increase () {
    counter++
    console.log(counter)
  }

  function decrease () {
    counter--
    console.log(counter)
  }

  return {
    increase,
    decrease
  }
}

var myCounter = counterClosure()
console.log(myCounter)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// // const result = func(2)(5)(8)

// const add10 = func(10)

// // console.log(add10(2)(5))

// const add30 = add10(20)

// console.log(add30(50))
