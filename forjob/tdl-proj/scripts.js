window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks', '#tasks-done');

  form.addEventListener('submit', (e) => {
    e.preventDefault();


    const tasks = input.value;

    if(!tasks) {
      alert("Введите задачу!");
      return;
    };


    const tasks_el = document.createElement("div");
    tasks_el.classList.add('tasks', 'tasks-done')

    const tasks_content_el = document.createElement("div");
    tasks_content_el.classList.add("content", "content-done")

  
  



    tasks_el.appendChild(tasks_content_el)

    const tasks_input_el = document.createElement("input");
    tasks_input_el.classList.add("text")
    tasks_input_el.type = "text";
    tasks_input_el.value = tasks;
    tasks_input_el.setAttribute("readonly", "readonly");

    tasks_content_el.appendChild(tasks_input_el)

    if (tasks === tasks_input_el){
      alert("Эта задача уже");
    }

    const tasks_actions_el = document.createElement("div");
    tasks_actions_el.classList.add("actions", "acitons-done");

    const tasks_done_el = document.createElement('button');
    tasks_done_el.classList.add('done', 'done-done');
    tasks_done_el.innerText = 'Done';

    const tasks_edit_el = document.createElement('button');
		tasks_edit_el.classList.add('edit', 'edit-done');
		tasks_edit_el.innerText = 'Edit';

		const tasks_delete_el = document.createElement('button');
		tasks_delete_el.classList.add('delete', 'delete-done');
		tasks_delete_el.innerText = 'Delete';

   

    tasks_actions_el.appendChild(tasks_done_el)
    tasks_actions_el.appendChild(tasks_edit_el)
    tasks_actions_el.appendChild(tasks_delete_el)

    tasks_el.appendChild(tasks_actions_el);

    list_el.appendChild(tasks_el)
    

    tasks_done_el.addEventListener('click', () => {

      tasks_el.classList.remove('tasks');
      tasks_input_el.classList.remove("text")
      tasks_input_el.classList.add("text-done")
      tasks_done_el.innerText = 'Cancel';

    })

    tasks_edit_el.addEventListener('click', () => {
      if (tasks_edit_el.innerText.toLocaleLowerCase() == "edit") {
        tasks_input_el.removeAttribute("readonly");
        tasks_input_el.focus();
        tasks_edit_el.innerText = "Save" 
      } else {
        tasks_input_el.setAttribute("readonly", "readonly")
        tasks_edit_el.innerText = "Edit"
      }
    })


    tasks_input_el.addEventListener('dblclick', () => {
      if (tasks_edit_el.innerText.toLocaleLowerCase() == "edit") {
        tasks_input_el.removeAttribute("readonly");
        tasks_input_el.focus();
        tasks_edit_el.innerText = "Save" 
      } else {
        tasks_input_el.setAttribute("readonly", "readonly")
        tasks_edit_el.innerText = "Edit"
      }
    })

    tasks_delete_el.addEventListener('click', () => {
      list_el.removeChild(tasks_el)
    })



  })
})