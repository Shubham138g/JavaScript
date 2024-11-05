const item = document.querySelector("#input");
const listBox = document.querySelector("#listItem")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key === "Enter") {
            // console.log(this.value);
            addTodo(this.value);
        }
    }
)

const addTodo = (item) => {
    let listItem = document.createElement("li")
    listItem.innerHTML = `
      ${item} <i class="fa-solid fa-xmark"></i>
    `
    listItem.addEventListener("click",function(){
        this.classList.toggle("done")
    })
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })
    listBox.appendChild(listItem)
}
