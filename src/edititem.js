import { addToItems, itemsList } from './storage';
import { renderProjectItems } from './displayitems';

const contentContainer = document.getElementById("content");
// const mainContainer = document.getElementById("main");

const toEdit = (title) => {
    let obj = itemsList.find(e => e.title === title);

    console.log(obj)
}

const editItemModal = document.createElement('div');

function renderEditModal(title) {
    let itemToEdit = itemsList.find(e => e.title === title);
    console.log(itemToEdit);

    editItemModal.className = 'item-modal';

    const editItemModalContent = document.createElement('div');
    editItemModalContent.className = 'item-modal-content';

    const addItemForm = document.createElement('form');
    addItemForm.className = 'item-form';
    addItemForm.onsubmit = 'return false';

    const titleInput = document.createElement('span');
    titleInput.id = 'title-input'
    titleInput.required = 'required';
    titleInput.textContent = `${itemToEdit.title}`;
    titleInput.contentEditable = true;
    titleInput.className = 'textarea';

    const descriptionInput = document.createElement('span');
    descriptionInput.id = 'description-input'
    descriptionInput.textContent = `${itemToEdit.description}`;
    descriptionInput.contentEditable = true;
    descriptionInput.className = 'textarea';

    const dateDueInput = document.createElement('input');
    dateDueInput.type = 'date';
    dateDueInput.id = 'date-due-input'
    if (itemToEdit.dateDue == '') {
        dateDueInput.hidden = 'true';
    } else {
        dateDueInput.value = `${itemToEdit.dateDue}`;
    }
    const dateDueBtn = document.createElement('p');
    dateDueBtn.id = 'date-due-button';
    dateDueBtn.textContent = 'Due date';
    dateDueBtn.addEventListener('click', () => {
        dateDueInput.hidden == true ? dateDueInput.hidden = false : dateDueInput.hidden = true;
    });

    // const pinInput = document.createElement('input');
    // pinInput.type = 'checkbox';
    // pinInput.id = 'pin-input'
    // const pinLabel = document.createElement('label');
    // pinLabel.htmlFor = 'pin-input';
    // pinLabel.textContent = 'pin';

    const submitItemButton = document.createElement('input');
    submitItemButton.type = 'button';
    submitItemButton.value = 'Submit';

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
    editItemModalContent.appendChild(addItemForm);
    editItemModal.appendChild(editItemModalContent);

    setCancelItemListener();
    // setSubmitItemListener();

    openItemModal();
}


const setCancelItemListener = () => {

    window.addEventListener('click', (e) => {
        console.log(e);
        let isClickInModal = editItemModal.contains(e.target);
        if (e.target == editItemModal) {
            closeItemModal();
        }
    });
};

const setSubmitItemListener = () => {
    submitItemButton.addEventListener('click', (e) => {
        
        let projectTitle = document.querySelector('#project-title');
        console.log(itemsList.some(e => e.title === titleInput.textContent.trim()));
        console.log(projectTitle.textContent);
        console.log(itemsList);
        console.log(itemsList.some(e => e.project === projectTitle.textContent));
        // Error check
        if (titleInput.textContent.trim() == '') {
            console.log(titleInput);
            console.log(descriptionInput);
        } else if (itemsList.some(e => e.title === titleInput.textContent.trim() && itemsList.some(e => e.project === projectTitle.textContent))) {
            alert(`title already taken`)
        } else {
            addToItems(projectTitle.textContent, titleInput.textContent, descriptionInput.textContent, dateDueInput.value, pinInput.checked);

            closeItemModal();
            // editItemModal.hidden = true;
            renderProjectItems();

        }

        // console.log(projectTitle.textContent);

    })

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

// const cancelItem = document.createElement('button');

// main.appendChild(editItemModal);

const rendereditItemModal = () => {


    openItemModal();

    setSubmitItemListener();
    setCancelItemListener();
}

export { renderEditModal }