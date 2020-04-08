//jshint esversion: 7

//Req. 3B
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(avg);
};

//Req. 3C
let arrMax = (arr) => {
  //
};

let fruits = ["Apple", "Orange", "Plum"];
let maxSoFar = fruits[0].length;

//iterate over array ay
fruits.forEach((elem) => {
  if(elem.length > maxSoFar) {
    maxSoFar = elem.length;
  }
});

console.log(maxSoFar);
