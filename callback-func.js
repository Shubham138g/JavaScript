function sum(a,b,callback){
    setTimeout(() => {
        console.log("hello i am sum",a+b)
        callback();
    },1000);
}

function min(x,y)
{
    console.log("i am min")
}

sum(1,2,min);