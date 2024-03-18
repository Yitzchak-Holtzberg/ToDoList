import {compareAsc} from "date-fns";

class TodoItem {
  constructor(title, content, duDate, priority, isDone = false, folder = "default", date = new Date()) {
    this.title = title;
    this.content = content;
    this.duDate = new Date(duDate); // Ensure duDate is a Date object
    this.priority = priority;
    this.isDone = isDone;
    this.folder = folder;
    this.date = date;
  }
}

class TodoList {
  constructor() {
    this.todoList = [];
  }

  addTodoItem(todoItem) {
    this.todoList.push(todoItem);
  }

  removeTodoItem(todoItem) {
    this.todoList = this.todoList.filter(item => item !== todoItem);
  }

  getTodoList() {
    return this.todoList;
  }

  sortTodoListByDate() {
    this.todoList.sort((a, b) => compareAsc(a.duDate, b.duDate));
  }

  sortTodoListByPriority() {
    this.todoList.sort((a, b) => a.priority - b.priority);
  }

  sortTodoListByTitle() {
    this.todoList.sort((a, b) => a.title.localeCompare(b.title));
  }

  filterTodoListByFolder(folder) {
    return this.todoList.filter(item => item.folder === folder);
  }

  filterTodoListByDate(date) {
    const targetDate = new Date(date);
    return this.todoList.filter(item => item.duDate.toDateString() === targetDate.toDateString());
  }

  filterTodoListByPriority(priority) {
    return this.todoList.filter(item => item.priority === priority);
  }

  filterTodoListByTitle(title) {
    return this.todoList.filter(item => item.title === title);
  }

  filterTodoListByIsDone(isDone) {
    return this.todoList.filter(item => item.isDone === isDone);
  }
}

export {TodoItem, TodoList};


