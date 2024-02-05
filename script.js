const taskInput = document.getElementById('taskInput');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
 
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  const taskTitle =  taskInput.value;
   // console.log(taskTitle);
    if(taskTitle == ""){
        alert("Enter the Task");
    }else{
      const ListItem = document.createElement('li');
    ListItem.innerHTML = taskTitle;
    taskList.append(ListItem);
    let span = document.createElement('span');
    span.innerHTML = '&times;';
    ListItem.appendChild(span);
    taskInput.value = "";  
    saveListData();
    }
    
} );

taskList.addEventListener( "click", (e) => {

    if(e.target.tagName == "LI"){
        e.target.classList.toggle ("checked");
        saveListData();
    }
    if(e.target.tagName == "SPAN"){

        const li = e.target.parentElement;
        li.remove();
        saveListData();
    }
});

function showListData(){
    taskList.innerHTML = localStorage.getItem("listItem");
}

function saveListData(){
    localStorage.setItem('listItem', taskList.innerHTML);
}
showListData();