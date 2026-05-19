const input = document.querySelector('#input');
const btn = document.querySelector('button');
const myForm = document.querySelector('#my-form');
const userList = document.querySelector('.list');
const warnBox = document.querySelector('.warn')
const deleteBtn = document.querySelectorAll('.del-button');

btn.addEventListener('click', addTask);
myForm.addEventListener('keydown', addTask);
deleteBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        document.getElementsByTagName('li')[index].textContent = "";
    })
})
function addTask(e){
    e.preventDefault();
    if(!input.value){
        warnBox.setAttribute
        ("id", "warn");
        warnBox.innerHTML = 'Enter a Task.';
        
        setTimeout(() => warnBox.remove(), 2000);
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<label><input type = "checkbox"> ${input.value} </label><button class = "del-button">X</button>`;
        const file = userList.appendChild(listItem);
        input.value = '';
        
        return file;
    }
}

function deleteTask(){
    
}