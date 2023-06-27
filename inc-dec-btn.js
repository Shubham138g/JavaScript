let inc_btn=document.getElementById("inc");
let dec_btn=document.getElementById("dec");
let count=document.getElementById("count");
let num=0;

inc_btn.addEventListener("click",function(){
    num++;
    count.textContent=num;
    console.log(" inc clicked")
})
dec_btn.addEventListener("click",function(){
    if(num==0){
        num=0;
    }
    else{
        num--;

    }
count.textContent=num;
    console.log("clicked")
})
