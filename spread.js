// const arr=[1,2,3,4,5,6,7,8,9]
// const arrcp=[...arr]
// console.log(arrcp)



//rest operator

// const student ={
//     name:"shubham",
//     class1:"BCA",
//     hobbies:["watching movies","singing","cycling"]
// }
// const {class1,...rest} =student;//rest operator combine the the rest element
// console.log(rest)

// ----------------------------------------

//spread operator

// const arr=["shubham","mohan","kundan","raju","vikram"]
// const newarr={
//     ...arr, //spread operator <------here we copy the arr array and then update the array index[2] with shubham gupta from kundan
//     2:"shubham Gupta"
// }


// console.log(newarr)

// --------------------------------------------------------------

//spread operator

const obj = {
    name: "shubham",
    class1: "BCA",
    hobbies: ["watching movies", "singing", "cycling"]
}

const newobj = {
    ...obj,
    class1: "B-Tech",
    //to update the index number 2 of hobbies in obj with "swim" then copy the obj.hobbies object and then update the value of array
    hobbies: [...obj.hobbies] 
}

newobj.hobbies[2] = "swim"

console.log(newobj)