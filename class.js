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
        // return num;
        console.log(num);
    }
    // minus(){

    // }
}

let table= new Abc();

table.table(3);
table.sum(3,5);