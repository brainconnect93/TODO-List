/**
 * @jest-environment jsdom
 */

 import ToDoList from '../modules/addRemove.js';

 const taskstore = new ToDoList();
 document.body.innerHTML = '<div class="todos-list"></div>';

 describe('Test edit todolist', () => {
    test('edit todolist', () => {
      taskstore.addTask('Hang out with friends and family');
      taskstore.addTask('play tic tac toe game');


      const items = document.querySelectorAll('.todos-list .todos-content');
      expect(items).toHaveLength(2);

      taskstore.editTask({ id: 1, data: 'go swimming' });
      const taskOne = document.querySelectorAll('.todos-list .todos-content p')[0].textContent;

      taskstore.editTask({ id: 2, data: 'going to the Library' });
      const taskTwo = document.querySelectorAll('.todos-list .todos-content p')[1].textContent;

      expect(taskOne).toBe('go swimming');
      expect(taskTwo).toBe('going to the Library');
    });
})

describe('mark complete todoList', () => {
    test('test complete todos', () => {
      taskstore.markCompleted(0);
      taskstore.markCompleted(1);
      taskstore.displayTodos();
  
      const completeOne = document.querySelectorAll('.todos-list .todos input[type=checkbox]')[0].checked;
      const completeTwo = document.querySelectorAll('.todos-list .todos input[type=checkbox]')[1].checked;
  
      expect(completeOne).toBe(true);
      expect(completeTwo).toBe(true);
    });
});

