var todoInput = document.querySelector('.todo__input');
var addBtn = document.querySelector('.add__button');
var todoList = document.querySelector('.todos');
addBtn.addEventListener('click', function () {
    createListElement();
});
// function createListElement(){
//     if(todoInput.value.trim()!== ''){
//         todoList.innerHTML=`
//         <li>
//         <span>${todoInput.value}</span>
//         <button onclick='deleteTodo()' class="delete__button">Delete</button>
//     </li>`
//     }
//     todoInput.value="";
// }
function createListElement() {
    if (todoInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.classList.add("todo_item");
        li.innerHTML = "\n          <span>".concat(todoInput.value, "</span>\n          <button class=\"delete__button\" onclick='deleteTodo(this)'>Delete</button>\n      ");
        todoList.appendChild(li);
    }
    todoInput.value = "";
}
function deleteTodo(deletedItem) {
    var _a;
    (_a = deletedItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
