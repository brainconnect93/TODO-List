/**
 * @jest-environment jsdom
 */

import ToDoList from '../modules/addRemove.js';

const taskstore = new ToDoList();
describe('Test addItem todolist', () => {
    document.body.innerHTML = '<div class="todos-list"></div>';
    
    test('todo list 1', () => {
        taskstore.addTask('Watch Champions League Final');
        const list = document.querySelectorAll('.todos-list');
        expect(list).toHaveLength(1);
    })
})