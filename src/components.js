/**
 * Class representing a todo item with an associated project.
 */
class TodoItem {
  /**
   * Create a todo item.
   * @param {string} title The title of the todo item.
   * @param {string} content The content of the todo item.
   * @param {string} dueDate The due date of the todo item.
   * @param {number} priority The priority of the todo item.
   * @param {boolean} isDone The status of the todo item.
   * @param {string} project The project the todo item belongs to.
   * @param {Date} date The creation date of the todo item.
   */
  constructor(title, content, dueDate, priority, isDone = false, project = "Default", date = new Date()) {
    this.title = title;
    this.content = content;
    this.dueDate = new Date(dueDate); // Ensure dueDate is a Date object
    this.priority = priority;
    this.isDone = isDone;
    this.project = project; // Specify the project this todo item belongs to
    this.date = date;
  }
}

/**
 * Class representing a list of todo items, including methods to manage these items.
 */
class TodoList {
  constructor() {
    this.todoItems = []; // An array to store todo items
  }

  /**
   * Add a todo item to the list.
   * @param {TodoItem} todoItem The todo item to add.
   */
  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }

  /**
   * Remove a todo item from the list by matching the exact todoItem object.
   * @param {TodoItem} todoItem The todo item to remove.
   */
  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter(item => item !== todoItem);
  }

  /**
   * Filter and return todo items by project name.
   * @param {string} projectName The name of the project to filter by.
   * @return {TodoItem[]} A filtered array of todo items belonging to the specified project.
   */
  filterByProject(projectName) {
    return this.todoItems.filter(item => item.project === projectName);
  }

  /**
   * Get all todo items in the list.
   * @return {TodoItem[]} An array of all todo items in the list.
   */
  getTodoItems() {
    return this.todoItems;
  }
}

// Usage example



// Exporting the classes for external use

/**
 * Create a home page with todo items, potentially filtered by a project.
 * @param {TodoItem[]} todoList - The array of todo items to display, which can be filtered by project name.
 * @return {HTMLElement} The home page element.
 */
function generateTaskList(todoList) {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add("");
  for (const item of todoList) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const paragraph4 = document.createElement('p'); // Added for project name

    h2.textContent = item.title;
    paragraph1.textContent = `Content: ${item.content}`;
    paragraph2.textContent = `Due Date: ${item.dueDate.toDateString()}`;
    paragraph3.textContent = `Priority: ${item.priority}, Is Done: ${item.isDone}`;
    paragraph4.textContent = `Project: ${item.project}, Date: ${item.date.toDateString()}`; // Updated to include project

    article.appendChild(h2);
    article.appendChild(paragraph1);
    article.appendChild(paragraph2);
    article.appendChild(paragraph3);
    article.appendChild(paragraph4); // Append the project paragraph
    homeContainer.appendChild(article);
  }
  return homeContainer;
}
export {TodoItem, TodoList, generateTaskList};
