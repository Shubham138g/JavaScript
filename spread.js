// const arr=[1,2,3,4,5,6,7,8,9]
// const arrcp=[...arr]
// console.log(arrcp)



//rest operator
const student ={
    name:"shubham",
    class1:"BCA",
    hobbies:["watching movies","singing","cycling"]
}
const {class1,...rest} =student;//rest operator combine the the rest element
console.log(rest)
