let number=[1,44,2,56,35,10];

function deleteElement(position){
    for(let i=position;i<=number.length-2;i++){
        number[i]=number[i+1];
        
    }
    number.length = number.length - 1;
}
deleteElement(5)
console.log(number);
