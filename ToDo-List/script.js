//Initializing tasks array
let tasks = [];
const addButton = document.querySelector(".button-add");
const divTasks = document.querySelector(".div-tasks");
let alertDiv = document.querySelector(".alert");

addButton.addEventListener('click', function(){
    let inputText = document.querySelector(".input-text");
    if(inputText.value == ""){
        alertDiv.textContent = "Write one Task";
    }else{
        addTask(inputText.value);
    }
})

function addTask(text){
    tasks.push(text);
    loadTasks();
    console.log(tasks);
}

function removeTask(index){
    tasks.splice(index, 1)
    loadTasks();
}

let count = 0
function loadTasks(){
    divTasks.innerHTML = "";

    tasks.forEach((task, index) => {
        const divDad = document.createElement('div');
        divDad.classList = "w-100 d-flex gap-2";
        
        const divSon = document.createElement('div');
        divSon.classList = "w-100 d-flex align-items-center border";
        divSon.textContent = task;

        const divTrashButton = document.createElement('button')
        divTrashButton.classList = "btn btn-primary"
        divTrashButton.addEventListener('click', (index) => {removeTask(index)})

        const trashButton = document.createElement("i")
        trashButton.classList = "bi bi-trash3"


        console.log(divSon.innerHTML);
        divTasks.appendChild(divDad);
        divDad.appendChild(divSon);
        divTrashButton.appendChild(trashButton);
        divDad.appendChild(divTrashButton);
        count += 1;
        
        console.log(task, count);
    })
}