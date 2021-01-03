const toDoForm = document.querySelector(".todo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.quertySelector(".todo-list");



const todos_ls = "toDos";

function paintToDo(text) {
    console.log(text);

}

function handleSubmit(event) {
    event.prevenDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);

}

function loadToDos() {
    const toDos = localStorage.getitem(todos_ls);
    if (toDos !== null) {

    } else {

    }



}






function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)


}

init();