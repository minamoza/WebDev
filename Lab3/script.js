const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const toDoList = document.querySelector(".todoList");
const checkBox = document.querySelector(".todoList checkbox");
const toDo = document.querySelector(".todoList li")

showToDoList();

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        list = [];
    }else{
        list = JSON.parse(getLocalStorage);
    }
    list.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(list));
    showToDoList();
    inputBox.value = null;
}

function showToDoList(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        list = [];
    }else{
        list = JSON.parse(getLocalStorage);
    }
    let newList = '';
    list.forEach((element,index) => {
        newList += `<li> <input type="checkbox" class="chb"><p class = "done">${element}</p><span onclick="deleteTask(${index})"><i class="fa fa-trash-o fa-lg"></i></span></li>`;
    });
    toDoList.innerHTML = newList;
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    list = JSON.parse(getLocalStorage);
    list.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(list));
    showToDoList();

}