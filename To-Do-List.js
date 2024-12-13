const prompt = require("prompt-sync")();

console.log("Welcome to the To-Do List App!");
let todoList = []; // Array to store tasks

const displayMenu = () =>
  console.log(
    `\nWhat would you like to do?\n1. Add a task\n2. View tasks\n3. Mark a task as completed\n4. Remove a task\n5. Exit`
  );

const displayTasks = () => {
  if (!todoList.length) return console.log("Your to-do list is empty.");
  console.log("\nYour To-Do List:");
  todoList.forEach((task, i) =>
    console.log(
      `${i + 1}. ${task.text} [${task.completed ? "Completed" : "Pending"}]`
    )
  );
};

const getValidTaskNumber = (action) => {
  const num = parseInt(prompt(`Enter the task number to ${action}: `));
  return num > 0 && num <= todoList.length ? num : null;
};

while (true) {
  displayMenu();
  const choice = prompt("Enter your choice (1-5): ").trim();

  if (choice === "1") {
    const taskText = prompt("Enter the task: ").trim();
    taskText
      ? (todoList.push({ text: taskText, completed: false }),
        console.log(`Task added: "${taskText}"`))
      : console.log("ERROR: Task cannot be empty.");
  } else if (choice === "2") {
    displayTasks();
  } else if (choice === "3") {
    displayTasks();
    const taskNum = getValidTaskNumber("mark as completed");
    taskNum
      ? ((todoList[taskNum - 1].completed = true),
        console.log(`Task completed: "${todoList[taskNum - 1].text}"`))
      : console.log("ERROR: Invalid task number.");
  } else if (choice === "4") {
    displayTasks();
    const taskNum = getValidTaskNumber("remove");
    taskNum
      ? console.log(
          `Task removed: "${todoList.splice(taskNum - 1, 1)[0].text}"`
        )
      : console.log("ERROR: Invalid task number.");
  } else if (choice === "5") {
    console.log("Thank you for using the To-Do List App. Goodbye!");
    break;
  } else {
    console.log("ERROR: Invalid choice. Enter a number between 1 and 5.");
  }
}

