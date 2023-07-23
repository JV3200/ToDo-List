let input = prompt("what would you like to do?");
// defining input as a prompt function with a question for the user.
const todos = ["collect mail", "clean room", "walk dog"];
// defining todos as an array of strings

while (input !== "quit" && input !== "q") {
  // Creates a while loop that will continue to prompt the user with the input prompt as long as the input does NOT = a string that says quit and q
  if (input === "list") {
    for (let i = 0; i < todos.length; i++) {
      // If the users input equals list then this code will then initiate the for loop to iterate over each index of the array.
      console.log(`${i}: ${todos[i]}`);
      // displays in the console the index number and name of the todo using string template literals.
      console.log("********");
    }
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    //if user input equals new then this block of cod will then prompt the user with a question of what the new todo item will be?
    console.log(`${newTodo} added to the list`);
    //displays the new todo and provided string after the string template literal
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete!"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted todo ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
    // if the users in put equals delete it will then prompt the user to provide an index value which will be used by splice method to delete the chosen index todo item.
  }
  // input = prompt("what would you like to do?");
}

console.log("Goodbye!");
