var name = "shoaib";
var age = 26

var info = function () {

  console.log(name);
  console.log(age);
  var name = 20;
};

info();
function assign() {
    var numOne = numTwo = 10;
    console.log(numOne,numTwo)
  }
  assign()
console.log('numTwo', typeof numTwo === 'undefined');
console.log('numOne', typeof numOne === 'undefined');
