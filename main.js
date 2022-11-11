function editPost(e) {

    inputField.value = e.target.parentElement.previousElementSibling.innerHTML;

    e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.remove()
  };
  
  
  
  function addListenersToEditButtons(){
    const buttonCollection = document.querySelectorAll(".edit__btn");
    console.log(buttonCollection, 'btn');
    
      const lastButton = buttonCollection[buttonCollection.length - 1];
      lastButton.addEventListener("click", editPost);
  }
  
  function deletePost(eventObject) {
      const buttonClicked = eventObject.target;
      const todoItem = buttonClicked.parentNode.parentNode.parentNode;
      todoItem.remove();
    }
     
    function addListenersToDeleteButtons() {
      const buttonCollection = document.querySelectorAll(".delete__btn");
      const lastButton = buttonCollection[buttonCollection.length - 1];
      lastButton.addEventListener("click", deletePost);
    }
    
    function showTodoOnTheScreen(todo) {
      const listOfTodo = document.querySelector("#todo__list");
      const li = document.createElement("li");
      li.classList.add("todo__section--todoItem");
    
      li.innerHTML = `<div class="Todo-div">
      <input class="todo__checkbox" type="checkbox" />
      <span class="todo__text"> ${todo} </span>
      <div class="todo__actions--wrapper">
        <button id="edit_btn" class="todo__actions edit__btn">
          edit
        </button>
        <button id="delete_btn" class="todo__actions delete__btn">
          delete
        </button>
      </div>
    </div>`;
    
      listOfTodo.appendChild(li);
      addListenersToDeleteButtons();
      addListenersToEditButtons();
    }
    
    function todoFormSumbitHandler(eventObject) {
      eventObject.preventDefault();
      inputField = document.querySelector("#todo__input");
      const todoValue = inputField.value;
      showTodoOnTheScreen(todoValue);
      inputField.value = ""
    }
    
    
    const todoForm = document.getElementById("form");
    todoForm.addEventListener("submit", todoFormSumbitHandler);