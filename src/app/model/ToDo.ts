import ToDoItem from './ToDoItem';

class ToDo {

  items: any;

  constructor() {
    this.items = this.loadFromLocalStorage();
  }

  add(item) {
    this.items.push(item);
    this.saveToLocalStorage();
  }

  delete(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.saveToLocalStorage();
  }

  changeState(item) {
    item.completed = !item.completed;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todo-data', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    const json = localStorage.getItem('todo-data');

    if (json === null) {
      // ako je samo return znaci da je emitovana undefined vrednost
      // return;
      return [];
    }

    const jsonParsed = JSON.parse(json, (key, value) => {
      if (key === 'date') {
        value = new Date(value);
      }
      return value;
    });

    if (jsonParsed.length === 0) {
      return [];
    }

    const toDoItems = [];

    for (let i = 0; i < jsonParsed.length; i++) {
      toDoItems.push(ToDoItem.fromJSON(jsonParsed[i]));
    }

    return toDoItems;
  }

}
export default ToDo;
