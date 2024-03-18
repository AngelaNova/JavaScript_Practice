let toDoList1=[];
let toDoList2=[];
let toDoList=[];

/*function add1(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  toDoList1.push(name);
  console.log(toDoList1);
  inputElement.value = '';

}
function add2() {
  const inputElement = document.querySelector('.js-in2');
  const name = inputElement.value;
  toDoList2.push(name);
  inputElement.value = '';
  
  let todoListHTML = '';
  for (let i = 0; i < toDoList2.length; i++) {
    const todo = toDoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
*/


function add3() {
  const inputElement = document.querySelector('.js-input-final');
  const name = inputElement.value;
  inputElement.value = '';

  // Assuming you also have a date input field with class 'js-date-input'
  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
  dateInputElement.value = '';

  toDoList.push({ name, dueDate });

  renderToDoList();
}

function removeItem(index) {
  toDoList.splice(index, 1);
  renderToDoList();
}

function renderToDoList() {
  let todoListHTML = '';

  toDoList.forEach((todo, index) => {
    const { name, dueDate } = todo;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button onclick="removeItem(${index})" class=" button-del">Delete</button>
      `;
    todoListHTML += html;
    console.log(todoListHTML);
  });

  document.querySelector('.js-final').innerHTML = todoListHTML;
}
