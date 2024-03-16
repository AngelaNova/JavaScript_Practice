const toDoList1=[];
const toDoList2=[];
const toDoList=[];

function add1(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  toDoList1.push(name);
  console.log(toDoList1);
  inputElement.value = '';

}

function add2(){
  const inputElement = document.querySelector('.js-in2');
  const name = inputElement.value;
  toDoList2.push(name);
  inputElement.value = '';
  let todoListHTML='';
  for(let i=0; i<toDoList2.length; i++){
    const todo = toDoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;

  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

}