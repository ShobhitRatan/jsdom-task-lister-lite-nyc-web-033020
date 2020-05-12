document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  let inputField = document.getElementById("new-task-description")
  let ul = document.getElementById("tasks")
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let userInput = inputField.value
    let li = document.createElement("li")
    li.innerHTML = userInput
    ul.appendChild(li)
  })
});
