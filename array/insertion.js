let number=[1,44,2,56,35,10];

function insertElement(position,item){
    for(let i=number.length;i>position;i--){
        number[i]=number[i-1];
    }
    number[position]=item
}
insertElement(1,1200)
console.log(number);
