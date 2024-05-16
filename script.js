document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task) {
        let taskList = document.getElementById('taskList');
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = task;
        let removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
