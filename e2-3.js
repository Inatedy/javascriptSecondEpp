/* Calculating a Sum
Calculating a sum is as simple as iterating over an array and adding each of the elements together.

Semantically reduce is the best method to use for this, but you can use any loop we've discussed so far.

Create a sumArray function that takes an array of numbers as a parameter, and calculate the sum of all its numbers:

Starter Code */

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; 
let suma =0
for(let i=0; i<numbers.length; i++){
  numbers[i]
  suma=suma+numbers[i]

}
console.log(suma)