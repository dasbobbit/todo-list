import { editItem, itemsList, deleteItem } from './storage';
import { renderProjectItems } from './displayitems';

const contentContainer = document.getElementById("content");
// const mainContainer = document.getElementById("main");

const toEdit = (title) => {
    let obj = itemsList.find(e => e.title === title);

    console.log(obj)
}

const editItemModal = document.createElement('div');
const editItemModalContent = document.createElement('div');
const addItemForm = document.createElement('form');
const titleInput = document.createElement('span');
const descriptionInput = document.createElement('span');
const dateDueInput = document.createElement('input');
const dateDueBtn = document.createElement('p');
dateDueBtn.addEventListener('click', () => {
    dateDueInput.hidden == true ? dateDueInput.hidden = false : dateDueInput.hidden = true;
});
const submitItemButton = document.createElement('input');
const deleteItemButton = document.createElement('input');
let itemIndex = -1;

function renderEditModal(title) {
    let itemToEdit = itemsList.find(e => e.title === title);
    console.log(itemToEdit);

    editItemModal.className = 'item-modal';

    editItemModalContent.className = 'item-modal-content';

    addItemForm.className = 'item-form';
    addItemForm.onsubmit = 'return false';

    titleInput.id = 'title-input'
    titleInput.required = 'required';
    titleInput.textContent = `${itemToEdit.title}`;
    titleInput.contentEditable = true;
    titleInput.className = 'textarea';

    descriptionInput.id = 'description-input'
    descriptionInput.textContent = `${itemToEdit.description}`;
    descriptionInput.contentEditable = true;
    descriptionInput.className = 'textarea';

    dateDueInput.type = 'date';
    dateDueInput.id = 'date-due-input'
    if (itemToEdit.dateDue == '') {
        dateDueBtn.hidden = false;
        dateDueInput.hidden = true;
    } else {
        dateDueInput.value = itemToEdit.dateDue;
        dateDueInput.hidden = false;
        dateDueBtn.hidden = true;
    }
    dateDueBtn.id = 'date-due-button';
    dateDueBtn.textContent = 'Due date';

    // const pinInput = document.createElement('input');
    // pinInput.type = 'checkbox';
    // pinInput.id = 'pin-input'
    // const pinLabel = document.createElement('label');
    // pinLabel.htmlFor = 'pin-input';
    // pinLabel.textContent = 'pin';

    submitItemButton.type = 'button';
    submitItemButton.value = 'Submit';

    deleteItemButton.type = 'button';
    deleteItemButton.value = 'Delete';

    itemIndex = itemsList.findIndex(e => e.title === titleInput.textContent);

    setSubmitItemListener();
    setCancelItemListener();
    setDeleteItemListener();
    
    openItemModal();
}

const r4 = document.createElement('p');
const r5 = document.createElement('p');

r4.appendChild(dateDueBtn);
r4.appendChild(dateDueInput);
// r5.appendChild(pinLabel);
// r5.appendChild(pinInput);

addItemForm.appendChild(titleInput);
addItemForm.appendChild(descriptionInput);
addItemForm.appendChild(r4);
// addItemForm.appendChild(r5);
addItemForm.appendChild(submitItemButton);
addItemForm.appendChild(deleteItemButton);
editItemModalContent.appendChild(addItemForm);
editItemModal.appendChild(editItemModalContent);

const setCancelItemListener = () => {
    window.addEventListener('click', (e) => {
        if (e.target == editItemModal) {
            closeItemModal();
        }
    });
};

const setDeleteItemListener = () => {
    deleteItemButton.addEventListener('click', (e) => {
        deleteItem(itemIndex);
        closeItemModal();
        renderProjectItems();
    });
}

const setSubmitItemListener = () => {
    submitItemButton.addEventListener('click', (e) => {
        let titleInput = document.querySelector('#title-input')
        console.log(titleInput);
        // Error check
        if (titleInput.textContent == '') {
            console.log(`Needs a title`);
        } else {
            editItem(itemIndex, titleInput.textContent, descriptionInput.textContent, dateDueInput.value)
            closeItemModal();
            renderProjectItems();
        }
    });
};

// setCancelItemListener();
// setSubmitItemListener();
const openItemModal = () => {
    main.appendChild(editItemModal);
    editItemModal.style.display = "block";
};

const closeItemModal = () => {
    // Clear text inputs in modal 
    titleInput.textContent = '';
    descriptionInput.textContent = '';
    dateDueInput.value = '';
    dateDueInput.hidden = true;

    // Hide modal
    editItemModal.style.display = "none";
}

export { renderEditModal }