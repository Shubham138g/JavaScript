// var sum = function (a) {
//     console.log("live viewers", +a)
//     var c = 5;
//     return function (b) {
//         return a + b + c;
//     }
// }

// var store = sum(2);
// console.log(store(3))

// ------------------------------------------------

// let sum = function (a, b, c) {

//     return {
//         getsumTwo: function () {
//             return a + b;
//         },
//         getsumThree: function () {
//             return  a + b + c;
//         }
//     }
// }

// let store = sum(3, 4, 7)
// console.log(store.getsumTwo());
// console.log(store.getsumThree());



function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); // innerFunction has access to outerVariable
    }
  
    return innerFunction; // Return the inner function without calling it
  }
  
  const closureFunction = outerFunction(); // closureFunction now holds innerFunction with its closure
  
  closureFunction();