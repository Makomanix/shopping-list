const list = document.querySelector('#list');

const input = document.querySelector('#item')

const btn = document.querySelector('#btn');

console.log(input.value)

btn.addEventListener('click', () => {
    let added = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let deleteBtn = document.createElement('button');

    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    span.textContent = added;
    deleteBtn.textContent = "Delete";

    list.appendChild(listItem);

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    })

    input.focus();
});



