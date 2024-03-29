const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];
todos.forEach
// To-do item HTML 👇
const container = document.querySelector('#todosContainer');
todos.forEach((todo) =>
container.insertAdjacentHTML('beforend', `
<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
  <input class="d-flex form-check-input me-1" type="checkbox">
  <div>${todo.title}/div>
</div>`);
);


// TODO: Dynamically generate a list of to-dos based on `todos` array, and display them
