document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const buttonsDiv = document.createElement('div');
        
        // Complete button
        const completeButton = document.createElement('button');
        completeButton.className = 'btn btn-success btn-sm mr-2';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });
        buttonsDiv.appendChild(completeButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        buttonsDiv.appendChild(deleteButton);

        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
    }
});
