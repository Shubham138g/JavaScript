let sumButton=document.getElementById("btn")
let display=document.getElementById("sum")

sumButton.addEventListener("click",function(){
    let num1=parseFloat(document.getElementById("text1").value);
    let num2=parseFloat(document.getElementById("text2").value);
    let add=num1+num2;
    display.textContent=add;
})