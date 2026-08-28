// Day 05 - Mini Project
// Task Management System


type TaskStatus =
  | "pending"
  | "in-progress"
  | "completed";


interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
}


// Generic Repository

class Repository<T extends { id: number }> {
  protected items: T[] = [];

  add(item: T): T {
    this.items.push(item);
    return item;
  }

  getAll(): T[] {
    return [...this.items];
  }

  findById(id: number): T | undefined {
    return this.items.find(
      item => item.id === id
    );
  }

  delete(id: number): boolean {
    const index = this.items.findIndex(
      item => item.id === id
    );

    if (index === -1) {
      return false;
    }

    this.items.splice(index, 1);

    return true;
  }
}


// Task Service

class TaskService
  extends Repository<Task> {

  createTask(
    title: string,
    description: string
  ): Task {

    const task: Task = {
      id: this.items.length + 1,
      title,
      description,
      status: "pending",
      createdAt: new Date().toISOString()
    };

    return this.add(task);
  }


  updateStatus(
    id: number,
    status: TaskStatus
  ): Task | undefined {

    const task = this.findById(id);

    if (!task) {
      return undefined;
    }

    task.status = status;

    return task;
  }


  getCompletedTasks(): Task[] {
    return this.items.filter(
      task => task.status === "completed"
    );
  }
}


// Application

const taskService = new TaskService();


// Create tasks

taskService.createTask(
  "Learn TypeScript",
  "Complete advanced TypeScript concepts"
);

taskService.createTask(
  "Build Mini Project",
  "Create a task management system"
);

taskService.createTask(
  "Update GitHub",
  "Push TypeScript project to GitHub"
);


// Update task status

taskService.updateStatus(
  1,
  "completed"
);

taskService.updateStatus(
  2,
  "in-progress"
);


// Display all tasks

console.log("All Tasks:");

console.log(
  taskService.getAll()
);


// Display completed tasks

console.log(
  "Completed Tasks:"
);

console.log(
  taskService.getCompletedTasks()
);


// Find task

console.log(
  "Task with ID 2:"
);

console.log(
  taskService.findById(2)
);


// Delete task

const deleted = taskService.delete(3);

console.log(
  "Task deleted:",
  deleted
);