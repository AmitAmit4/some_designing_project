let items = [];

function createItem() {
    const input = document.getElementById('itemInput');
    const item = input.value;
    if (item) {
        items.push(item);
        input.value = '';
        renderItems();
    }
}

function readItems() {
    return items;
}

function updateItem(index) {
    const li = document.getElementById(`item-${index}`);
    const currentText = items[index];

    li.innerHTML = `
        <input type="text" id="updateInput-${index}" value="${currentText}">
        <button onclick="saveItem(${index})">Save</button>
        <button onclick="renderItems()">Cancel</button>
    `;
}

function saveItem(index) {
    const input = document.getElementById(`updateInput-${index}`);
    const newItem = input.value;
    if (newItem) {
        items[index] = newItem;
        renderItems();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

function renderItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.id = `item-${index}`;
        li.textContent = item;
        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.onclick = () => updateItem(index);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteItem(index);
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    });
}
