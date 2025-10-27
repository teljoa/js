// task : { id: number, name: string, completed: boolean}

let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 
let nextId = parseInt(localStorage.getItem('nextId')) || 1;

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


function renderTasks(){
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.name;
        // Añadir eventListener marcar tarea como completada
        span.addEventListener('click', ()=> toggleTask(task.id));

        // Boton de borrar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', (e) => {
            deleteTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

    });
}


function toggleTask(id){
    // Recuperar tarea
    const task = tasks.find(task => task.id === id);
    // Modificar tarea
    task.completed = !task.completed;
    // Actualizar localStorage
    updateLocalStorage();
    // Repintar la lista
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateLocalStorage();
    renderTasks();
}

function addTask() {
    const name = taskInput.value.trim();
    if (name) {
        tasks.push({id: nextId, name, completed: false});
        localStorage.setItem('nextId', ++nextId);
        updateLocalStorage();
        renderTasks();
        
    }
    taskInput.value = '';

}

function updateLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        addTask();
    }
})

renderTasks();