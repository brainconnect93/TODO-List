/**
 * @jest-environment jsdom
 */

import ToDoList from '../modules/addRemove.js';

const taskstore = new ToDoList();
document.body.innerHTML = '<div class="todos-list"></div>';
describe('Test addItem todolist', () => {
    
    test('todo list 1', () => {
        taskstore.addTask('Watch Champions League Final');
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(1);
    });

    test('todo list 2', () => {
        taskstore.addTask('Go to the Gym');
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(2);
    });

    test('todo list 3', () => {
        taskstore.addTask('Study more on JavaScript');
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(3);
    });
})

describe('Test removeItem todolist', () => {
    test('remove todo list 1', () => {
        taskstore.removeTask(1);
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(2)
    })

    test('remove todo list 2', () => {
        taskstore.removeTask(2);
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(1)
    })

    test('remove todo list 3', () => {
        taskstore.removeTask(1);
        const list = document.querySelectorAll('.todos-list .todos-content');
        expect(list).toHaveLength(0)
    })
})