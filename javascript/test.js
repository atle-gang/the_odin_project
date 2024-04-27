// Define a function to create a todo list
function TodoList() {
    this.tasks = [];
  }
  
  // Method to add a new task
  TodoList.prototype.addTask = function(taskName) {
    this.tasks.push({
      name: taskName,
      completed: false
    });
  };
  
  // Method to mark a task as completed
  TodoList.prototype.completeTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  };
  
  // Method to delete a task
  TodoList.prototype.deleteTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  };
  
  // Create a new instance of TodoList
  var todoList = new TodoList();
  
  // Add some initial tasks
  todoList.addTask("Do laundry");
  todoList.addTask("Buy groceries");
  todoList.addTask("Finish homework");
  
  // Complete the second task
  todoList.completeTask(1);
  
  // Delete the first task
  todoList.deleteTask(0);
  
  // Display the tasks
  console.log("Tasks:");
  todoList.tasks.forEach(function(task, index) {
    console.log(`${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.name}`);
  });

  // Define a function to create a todo list
function TodoList() {
    this.tasks = [];
  }
  
  // Method to add a new task
  TodoList.prototype.addTask = function(taskName) {
    this.tasks.push({
      name: taskName,
      completed: false
    });
  };
  
  // Method to mark a task as completed
  TodoList.prototype.completeTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  };
  
  // Method to delete a task
  TodoList.prototype.deleteTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  };
  
  // Create a new instance of TodoList
  var todoList = new TodoList();
  
  // Add some initial tasks
  todoList.addTask("Do laundry");
  todoList.addTask("Buy groceries");
  todoList.addTask("Finish homework");
  
  // Complete the second task
  todoList.completeTask(1);
  
  // Delete the first task
  todoList.deleteTask(0);
  
  // Display the tasks
  console.log("Tasks:");
  todoList.tasks.forEach(function(task, index) {
    console.log(`${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.name}`);
  });

  
  // Define a function to create a todo list
function TodoList() {
    this.tasks = [];
  }
  
  // Method to add a new task
  TodoList.prototype.addTask = function(taskName) {
    this.tasks.push({
      name: taskName,
      completed: false
    });
  };
  
  // Method to mark a task as completed
  TodoList.prototype.completeTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  };
  
  // Method to delete a task
  TodoList.prototype.deleteTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  };
  
  // Create a new instance of TodoList
  var todoList = new TodoList();
  
  // Add some initial tasks
  todoList.addTask("Do laundry");
  todoList.addTask("Buy groceries");
  todoList.addTask("Finish homework");
  
  // Complete the second task
  todoList.completeTask(1);
  
  // Delete the first task
  todoList.deleteTask(0);
  
  // Display the tasks
  console.log("Tasks:");
  todoList.tasks.forEach(function(task, index) {
    console.log(`${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.name}`);
  });

  
  // Define a function to create a todo list
function TodoList() {
    this.tasks = [];
  }
  
  // Method to add a new task
  TodoList.prototype.addTask = function(taskName) {
    this.tasks.push({
      name: taskName,
      completed: false
    });
  };
  
  // Method to mark a task as completed
  TodoList.prototype.completeTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    }
  };
  
  // Method to delete a task
  TodoList.prototype.deleteTask = function(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  };
  
  // Create a new instance of TodoList
  var todoList = new TodoList();
  
  // Add some initial tasks
  todoList.addTask("Do laundry");
  todoList.addTask("Buy groceries");
  todoList.addTask("Finish homework");
  
  // Complete the second task
  todoList.completeTask(1);
  
  // Delete the first task
  todoList.deleteTask(0);
  
  // Display the tasks
  console.log("Tasks:");
  todoList.tasks.forEach(function(task, index) {
    console.log(`${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.name}`);
  });
  