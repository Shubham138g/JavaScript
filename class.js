class Abc{
     table(num) {
        for(let i=1;i<=10;i++){
            console.log(i*num); 
        }
    }
    sum(...sumElement){
        let num=0;
        for(let element of sumElement){
            num+=element;
        }
        console.log(num);
        return num;
    }

}



let table= new Abc();

table.table(3);
table.sum(3,5,4,5,6,6,56,56);
