const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-cont");

function addTask(){
    if(inputBox.value ==``){
        alert("you must enter something !");
    }
    else{
        let li = document.createElement("li");
        console.log(JSON.stringify(li))
        li.textContent =  inputBox.value;
        listContainer.appendChild(li);
        li.onclick=toggleTask;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.onclick=removeTask;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function removeTask(){
  
    this.parentElement.remove(); 
    saveData();
}

function toggleTask() {
    this.classList.toggle("checked");
    saveData();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    let listItems = listContainer.querySelectorAll("li");
    listItems.forEach(item => {
        item.onclick = toggleTask; // Reattach toggleTask event to each list item
        let span = item.querySelector("span");
        span.onclick = removeTask; // Reattach removeTask event to each span
    });
}

showTask();