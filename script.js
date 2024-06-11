document.addEventListener('DOMContentLoaded', () =>
{
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask()
    {
        const taskText = taskInput.value.trim();
        if (taskText !== '')
        {
            const li = document.createElement('li');
            li.className = 'task';
            li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <input type="text" class="edit-input" style="display:none;">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(e)
    {
        if (e.target.classList.contains('delete'))
        {
            deleteTask(e.target);
        } else if (e.target.classList.contains('edit'))
        {
            editTask(e.target);
        }
    }

    function deleteTask(button)
    {
        const task = button.parentElement;
        task.remove();
    }

    function editTask(button)
    {
        const task = button.parentElement;
        const taskText = task.querySelector('.task-text');
        const editInput = task.querySelector('.edit-input');

        if (button.textContent === 'Edit')
        {
            editInput.value = taskText.textContent;
            taskText.style.display = 'none';
            editInput.style.display = 'inline';
            button.textContent = 'Save';
        } else
        {
            taskText.textContent = editInput.value.trim();
            taskText.style.display = 'inline';
            editInput.style.display = 'none';
            button.textContent = 'Edit';
        }
    }
});
