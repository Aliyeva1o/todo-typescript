const todoInput =<HTMLInputElement>document.querySelector('.todo__input')
const addBtn=<HTMLButtonElement>document.querySelector('.add__button')
const todoList =<HTMLUListElement>document.querySelector('.todos')

addBtn.addEventListener('click', () =>{
    createListElement();
    
})
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
      let li = document.createElement("li") as HTMLLIElement;
      li.classList.add("todo_item");
  
      li.innerHTML = `
          <span>${todoInput.value}</span>
          <button class="delete__button" onclick='deleteTodo(this)'>Delete</button>
      `;
      todoList.appendChild(li);
    }
  
    todoInput.value = "";
  }
  
  function deleteTodo(deletedItem: HTMLButtonElement) {
    deletedItem.parentElement?.remove();
  }
