import './styles.css';
import { toDoList } from './modules/addRemove';

const taskstore = new toDoList();


const textInput = document.querySelector('#add-items');

textInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter' && textInput.value){
      e.preventDefault();
      taskstore.addTask(textInput.value);
      textInput.value = null;
  };
});

window.addEventListener('load', taskstore.displayTodos);
