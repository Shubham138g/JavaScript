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

// const emp = [
//     "shubham",
//     "mohan",
//     "kundan kumar sahu",
//     "vikram Gupta",
//     "priyanka Thapa",
//     "Komal verma"
// ];

// console.log(emp)

// const  copyemp={...emp,2:"kundan meri jaan"};
// const {...rest}=emp; //rest operator 
// console.log(copyemp[5],rest)

//callback function practice
// function arr(callback) {
//     setTimeout(() => {
//         const arr1 = ["shubham", "mohan", "kundan"]
//         callback(arr1.sort())
//     }, 2000);
// }

// function dis(arr1) {
//     console.log(arr1)
// }

// arr(dis)

// interview question------------------------------------------------------------

// function abc(){
//     console.log(  abc.xyz);

// }
// abc();
// abc.xyz=400;
// // abc.xyz=200;
// abc();

// const number=[1,2,3,4]
// number[100]=100;
// console.log(number);

// const arr=[...'Shubham']
// const arr1=[...'Shubham']
// console.log([...arr,...arr1]);
// console.log(arr);

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('F3N'));

// console.log(isNaN("dibwndi"));


// console.log([1,2].map(num=>{
//     if(num>0) return;
//     return num*2;
//     }
// ));

// 'use strict'
// {
// function name(){
//     console.log("shubham");
// }
// }
// name();

// function abc(a,b) {
//     'use strict'
//     a = 100
//     b = 200
//     return arguments[0] + arguments[1];
//     console.log(a + b);
// }
// console.log(abc(200, 300));

//array delete method
// const arr=[1,2,3,4,5]
// delete arr[0]
// console.log(arr);

// const arr=[1,2,3,4,"abc"]
// const newarr=arr.splice(2)
// console.log(newarr);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.find((num => num > 4))   //5
 
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.filter((num => num > 4)) //[5,6,7,8,9]

// console.log(newArr);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.map((num => num > 4)) //[ false, false, false, false, true,  true, true,  true,  true ]

// console.log(newArr);


