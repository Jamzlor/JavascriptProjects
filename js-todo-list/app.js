function createCard(taskNameInput) {
    var card = document.createElement('div')
    card.classList.add('outputCard');

    var taskNameContainer = document.createElement('div');
    taskNameContainer.classList.add('taskNameContainer');
    card.appendChild(taskNameContainer);

    var taskName = document.createElement('h2');
    taskName.classList.add('taskName');
    taskName.innerHTML = taskNameInput;
    taskNameContainer.appendChild(taskName)

    var actionContainer = document.createElement('div');
    actionContainer.classList.add('actionContainer');
    card.appendChild(actionContainer);

    var completeButton = document.createElement('span');
    completeButton.classList.add('action', 'completed', 'fas', 'fa-check-circle');
    completeButton.style.color = 'green';
    completeButton.onclick = function(e){
        if(e.path[2].style.opacity === '0.3'){
            e.path[2].style.opacity = '1';
        } else {
            e.path[2].style.opacity = '0.3'
        }    
    }

    var deleteButton = document.createElement('span');
    deleteButton.classList.add('action', 'delete', 'fas', 'fa-trash-alt');
    deleteButton.style.color = 'red';
    deleteButton.onclick = function(e){
        e.path[2].remove();
    }

    var editPrompt = document.createElement('input');
    editPrompt.classList.add('editPrompt');
    editPrompt.autofocus = true;
    var editButton = document.createElement('span');
    editButton.classList.add('action', 'edit', 'fas', 'fa-edit');
    editButton.style.color = 'blue';
    var toggle = false;
    editButton.onclick = function(e){
        if(toggle){
            editPrompt.remove();
            toggle = false;
        } else{
            card.appendChild(editPrompt);
            editPrompt.addEventListener('keyup', function(e){
                if(e.key === 'Enter'){
                    if(editPrompt.value.length > 0){
                        taskName.innerHTML = editPrompt.value;
                        editPrompt.value = '';
                        editPrompt.remove();
                    } else {
                        editPrompt.style.background = 'red';
                        setTimeout(() => {
                            editPrompt.style.background = 'white'
                        }, 2000);
                    }
                }
            });
            toggle = true;
        }  
    }

    actionContainer.appendChild(completeButton);
    actionContainer.appendChild(deleteButton);
    actionContainer.appendChild(editButton);

    document.getElementById('taskOutput').appendChild(card);
}

var errorMessage = document.getElementById('errorMessage');
var inputVal = document.getElementById('input');
var deleteAction = document.querySelectorAll('.delete');

document.getElementById('input').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        if(inputVal.value.length > 0){
            createCard(inputVal.value);
            inputVal.value = '';
        } else {
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 2000);
        }
    }
});

var clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function(){
   document.querySelectorAll('.outputCard').forEach(item => item.remove());
})