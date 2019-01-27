/* Level 1: Array of Numbers
Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers:

Starter Code */

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

averageNumbers = (num) => {
  let suma =0
  for(let i=0; i<numbers.length; i++){
    numbers[i]
    suma=suma+numbers[i]

  }
  //console.log(suma)
  //let avr=suma/numbers.length
  return suma/numbers.length

}

averageNumbers(numbers)
console.log(averageNumbers(numbers))
//console.log(avr)