//closure back function

// const sum = function (a) {
//     console.log(a)
//     return function (b, c) {
//         return a + b + c;

//     }
// }

// const store = sum(1);
// console.log(store(1, 3))

// ---------------------------------------------------------

//spread operator

const emp = [
    "shubham",
    "mohan",
    "kundan kumar sahu",
    "vikram Gupta",
    "priyanka Thapa",
    "Komal verma"
];

console.log(emp)

const  copyemp={...emp,2:"kundan meri jaan"};
const {...rest}=emp; //rest operator 
console.log(copyemp[5],rest)
