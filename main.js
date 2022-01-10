function addTodo(){
    const input = document.querySelector('input');
    const value = input.value;

    let container = document.createElement('div');
    container.className = 'flex justify-between items-center';

    let title = document.createElement('h3');
    title.className = 'text-xl';
    title.textContent = value;

    let doneButton = document.createElement('button');
    doneButton.className = 'bg-green-500 py-2 px-4 rounded font-semibold';
    doneButton.textContent = 'Done'

    container.appendChild(title);
    container.appendChild(doneButton);

    const todosContainer = document.querySelector('#todosContainer');
    todosContainer.appendChild(container);

    input.value = "";
}

