let ourForm = document.getElementById("ourForm")
let newTask = document.getElementById("newTask")


ourForm.addEventListener("submit" ,(event) => {
    event.preventDefault()
    creatTask(newTask.value)  
} )


function creatTask(x) {
    let newItem = `<li> ${ x } <button onclick = "deleteItem(this)">Delete</button></li>`
    taskList.insertAdjacentHTML("beforeend", newItem )
    newTask.value = ""
    newTask.focus()    

}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}