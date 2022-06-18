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

    // to edit task in the todo list items

    editTask = ({ id, data }) => {
      this.tasks = this.getTasks().map((task) => {
        if (task.index === id && data !== '') task.description = data;
        return task;
      });
      this.populateLocalStorage();
      this.displayTodos();
    }

    regenerateTaskIds = () => {
      this.tasks = this.getTasks().map((task, index) => {
        task.index = index + 1;
        return task;
      });
    }

    getTasks = () => this.tasks

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
                <input type="checkbox" name="" id="${i}" ${this.tasks[i].completed ? 'checked' : ''}>
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
          this.markCompleted(parseInt(event.target.id, 10));
        });
      });
    }

    markCompleted = (index) => {
      this.tasks[index].completed = !this.tasks[index].completed;
      this.populateLocalStorage();
      this.displayTodos();
    }

    populateLocalStorage = () => {
      localStorage.setItem('taskstore', JSON.stringify(this.tasks));
    }
}

export default ToDoList;