// template class object
class ToDoList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  // to add to do list

    addTask = (item) => {
      this.tasks.push({ description: item, completed: false, index: this.tasks.length + 1 });
      this.populateLocalStorage();
      this.displayTodos();
    }

    // to remove task from the list

    removeTask = (index) => {
      this.tasks = this.tasks.filter((task) => task.index !== index);
      this.updateIndex();
      this.populateLocalStorage();
      this.displayTodos();
    }

    updateIndex = () => {
      this.tasks = this.tasks.map((task, index) => {
        task.index = index + 1;
        return task;
      });
    }

    // to display the event in the todo list

    displayTodos = () => {
      const todoList = document.querySelector('.todos-list');
      todoList.innerHTML = '';
      for (let i = 0; i < this.tasks.length; i += 1) {
        todoList.innerHTML += `
            <div class="todos-content">
              <div class="todos">
                <input type="checkbox" name="" id="">
                <p>${this.tasks[i].description}</p>
              </div>
              <div class="right">
                <i class="fa fa-ellipsis-v"></i>
                <i class="fas fa-trash-alt d-none" data-index=${i + 1}></i>
              </div>
            </div>
        `;
      }
      const deleteButtons = document.querySelectorAll('.fa-trash-alt');
      deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          const id = parseInt(event.target.getAttribute('data-index'), 10);
          this.removeTask(id);
        });
      });

      const checkBoxes = document.querySelectorAll('input[type=checkbox]');
      checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
          const inputField = event.target.parentNode.querySelector('p');
          const ellipsis = event.target.parentNode.parentNode.querySelector('.fa-ellipsis-v');
          const trashCan = event.target.parentNode.parentNode.querySelector('.fa-trash-alt');
          inputField.classList.toggle('line-through');
          trashCan.classList.toggle('d-none');
          ellipsis.classList.toggle('d-none');
        });
      });
    }

    populateLocalStorage = () => {
      localStorage.setItem('taskstore', JSON.stringify(this.tasks));
    }
}

export default ToDoList;