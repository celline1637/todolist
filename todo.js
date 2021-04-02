'use strict'

//date in todos
const todosDate = document.querySelector('p.date');

function getTime () {
    const dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let crrDate = new Date();
    let month = crrDate.getMonth() + 1;
    let date = crrDate.getDate();
    let day = dayArr[crrDate.getDay()];

    todosDate.innerText = `${month <10? `0${month}` : month
                        }.${date<10? `0${date}` : date
                        }.${day}`;
}

getTime();

//form in todos

// create lists
const listform = document.querySelector('.list-form');
listform.addEventListener('submit', function(e) {
    e.preventDefault(); //next page로 가지 않게 멈추기 : stop default behavior

     const todo = listform.elements.todos.value;
     addList(todo);
     //입력값 초기화
     listform.elements.todos.value = '';
     

});


const paper = document.querySelector('.todo-box');
const btnY = document.querySelector('.yellow');
const btnB = document.querySelector('.blue');
const btnG = document.querySelector('.green');

btnY.addEventListener('click',() =>{
    paper.setAttribute("style", "background-color: #ffe268;");
    
}) 
btnB.addEventListener('click',() =>{
    paper.setAttribute("style", "background-color: #a7c5eb;");
}) 
btnG.addEventListener('click',() =>{
    paper.setAttribute("style", "background-color: #99bbad;");
}) 





const addList = (todo) => {
    const newTodo = document.createElement('li');
    const todoLists = document.querySelector('ul.todo-lists');
    newTodo.append(todo);
    todoLists.appendChild(newTodo);

    newTodo.addEventListener('click', ()=>{
        newTodo.classList.toggle('done')
    })
    newTodo.addEventListener('dblclick', ()=>{
        newTodo.classList.toggle('init')
    })

}

//set the title of list
const addform = document.querySelector('.title-form');
addform.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = addform.elements.title.value;
    const todoBox = document.querySelector('.todo-box');
  
    const todoCont = document.querySelector('.todo-cont');
    const colorBtn = document.querySelector('.col');
    
     if (!title) {
        return alert('Please enter a title for the list // 목록의 이름을 작성해주세요 :)');
        
    } else {
        addtitle(title);
    }
    
    todoBox.classList.remove('init');
    todoCont.classList.remove('init');
    colorBtn.classList.remove('init');
    addform.elements.title.value = ''
})

const addtitle = (title) => {
    const titleInList = document.querySelector('p.goal');
    const newTitle = document.createElement('span');
    newTitle.append(title);
    titleInList.innerText = newTitle.innerText;
}





// // creating the new
// const addBtn = document.querySelector('.add');
// addBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     const todoBox = document.querySelector('#box');
//     const newTodoBox = todoBox.cloneNode(true);
//     const todoCont = document.querySelector('.todo-cont');
//     todoCont.append(newTodoBox) 

//     todoBox.classList.remove('init');
//     todoCont.classList.remove('init')
// }
// )
