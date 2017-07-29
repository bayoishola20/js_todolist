var taskList = [];

function insert() {
    var task = document.getElementById("inputArea").value;
    var ul = document.getElementById("myUl");

    if(task.trim().length === 0) {
        return false;
    }
    else {
        if(taskList.length < 15){
            taskList.push(task);
            
            var li = document.createElement("li");
            var text = document.createTextNode(task);
            var checkMark = document.createElement("button");
            var removeMark = document.createElement("button");

            li.appendChild(text);
            ul.appendChild(li);
            checkMark.innerHTML = "&checkmark;";
            checkMark.className = "listItemButton";
            checkMark.setAttribute("onclick", "done(this)");
            li.appendChild(checkMark);

            removeMark.innerHTML = "&cross;";
            removeMark.className= "listItemButton";
            removeMark.setAttribute("onclick", "remove(this)");
            li.appendChild(removeMark);

            reset();
        }
    }
}


function reset() {
    document.getElementById("inputArea").value = "";
}

function done(item) {
    var liTag = item.parentElement;

    // liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";
    if (liTag.style.textDecoration === "line-through") {
        liTag.style.textDecoration = "none";
    }
    else {
        liTag.style.textDecoration = "line-through";
    }
}

function remove(item) {
    var liTag = item.parentElement;
    var ulTag = liTag.parentElement;
    ulTag.removeChild(liTag);
    taskList.pop();
}

function enterKey() {
    var input = document.getElementById("inputArea");
    input.onkeyup = function(key) {
        if (key.keyCode === 13) {
            insert();
        }
    }
}
enterKey();


function clearItems() {
    var ul = document.getElementById("myUl");
    ul.innerHTML = "";
    taskList.splice(0, taskList.length);
}

//Animated hourglass

function hourGlass(){
    var hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf250;";
    setTimeout(function () {
       hourglass.innerHTML =  "&#xf251;";
    }, 1000);
    setTimeout(function () {
       hourglass.innerHTML =  "&#xf252;";
    }, 2000);
    setTimeout(function () {
       hourglass.innerHTML =  "&#xf253;";
    }, 3000);
    setTimeout(function () {
       hourglass.innerHTML =  "&#xf254;";
    }, 4000);
}
hourGlass();

setInterval(hourGlass, 5000);