// Figure out an Armstrong Number

function calcArmstrong(number) {
  var temp, sum, remainder;
  sum = 0;
  temp = number;

  while (temp != 0) {
    remainder = Math.floor(temp % 10);
    sum = sum + (remainder*remainder*remainder);
    //sum = sum + Math.pow(remainder,3);
    temp = Math.floor(temp / 10);
  }

  if (number == sum) {
      console.log(number+" is an Armstrong Number. Congrats!");
  } else {
      console.log(number+" is not an Armstrong Number. Sorry!");
  }
}

// tdd
var sourceArray = [0, 1, 153, 370, 371, 407];
sourceArray.map(function(number) {
    calcArmstrong(number); 
})
