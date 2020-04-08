//jshint esversion: 7

//Req. 3B
let arrAvg = arr => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  console.log(avg);
};

//Req. 3C
let arrMax = arr => {
  let largest = 0;
  arr.forEach(elem => {
    if (largest < elem) {
      largest = elem;
      {
        return largest;
      }
    }
  });
  console.log(largest);
};
