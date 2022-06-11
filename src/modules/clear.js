const clearAll = document.querySelector('.clear-btn');

const cleartodos = (taskstore) => {
  taskstore.tasks = taskstore.tasks.filter((task) => task.completed === false);
  taskstore.updateIndex();
  taskstore.populateLocalStorage();
  taskstore.displayTodos();
};
export { clearAll, cleartodos };