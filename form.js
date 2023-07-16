function displaydata(){
    var text1=document.getElementById("text1")
    var text2=document.getElementById("text2")

    document.write(text1.value,"<br>")
    document.write(text2.value)
}

let text=document.querySelector("h2")
console.log(text)

// ----------------------------------------------------
document.addEventListener("DOMContentLoaded",function(){
    const button1=document.getElementById("1")
    const button2=document.getElementById("2")
    const button3=document.getElementById("3")
    const displaybtn=document.getElementById("displaybutton")


    button1.addEventListener("click",function(){
        displaybtn.textContent="button 1 is clicked"
    })
    button2.addEventListener("click",function(){
        displaybtn.textContent="button 2 is clicked"
    })
    button3.addEventListener("click",function(){
        displaybtn.textContent="button 3 is clicked"
    })
})