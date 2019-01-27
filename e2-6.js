/* Level 2: Array of Strings
Write a function averageWordLength that receives an array of words and calculate the average length of the words:

Starter Code */

let words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];
let ar = new Array (10);

averageWordLength = (w,a) =>{
let acum=0
let acumon=0
  for(let i=0; i<w.length; i++){
    console.log(w[i])
    for(let j=0;j<w[i].length;j++){
      acum=j+1
      
    }
    a=acum[i]
   
  }
  
    return acumon/a.length
} 
averageWordLength(words,ar)