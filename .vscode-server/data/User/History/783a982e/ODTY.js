const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];
// select template tag
const template = document.querySelector('#todoItemTemplate');
// clone its content
// insert title into correct place

const container = document.querySelector('#todosContainer');
todos.forEach((todo) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".title").innerText = todo.title;
  // clone.querySelector("checkbox").textContent = movie.
  clone.querySelector("input").checked = todo.done;
  container.appendChild(clone);
});
// <input class="d-flex form-check-input me-1" type="checkbox">

// change checked property
// insert into to-do containers
// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array
