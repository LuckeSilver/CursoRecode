let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let toDos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar Comunidade da Rocketseat'
];

function renderTodos() {
    for (toDo of toDos) {
        let todoElement = document.createElement('li');
        let todoText = document.createElement('toDo');
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
renderTodos();