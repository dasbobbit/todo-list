import { addToItems, itemsList } from './storage';
import { renderProjectItems } from './displayitems';

const contentContainer = document.getElementById("content");
// const mainContainer = document.getElementById("main");

const addItemModal = document.createElement('div');
addItemModal.className = 'item-modal';

const addItemModalContent = document.createElement('div');
addItemModalContent.className = 'item-modal-content';

const addItemForm = document.createElement('form');
addItemForm.className = 'item-form';
addItemForm.onsubmit = 'return false';



const titleInput = document.createElement('span');
titleInput.id = 'title-input'
titleInput.required = 'required';
titleInput.contentEditable = true;
titleInput.className = 'textarea';
// const titleLabel = document.createElement('label');
// titleLabel.htmlFor = 'title-input';
// titleLabel.textContent = 'Title';

const descriptionInput = document.createElement('span');
descriptionInput.id = 'description-input'
descriptionInput.required = true;
descriptionInput.contentEditable = true;
descriptionInput.className = 'textarea';

// const descriptionLabel = document.createElement('label');
// descriptionLabel.htmlFor = 'description-input';
// descriptionLabel.textContent = 'Description';

const dateDueInput = document.createElement('input');
dateDueInput.type = 'date';
dateDueInput.id = 'date-due-input'
dateDueInput.hidden = 'true';

const dateDueBtn = document.createElement('p');
dateDueBtn.id = 'date-due-button';
dateDueBtn.textContent = 'Add due date?';
dateDueBtn.addEventListener('click', () => {

    dateDueInput.hidden == true ? dateDueInput.hidden = false : dateDueInput.hidden = true; 

});

const pinInput = document.createElement('input');
pinInput.type = 'checkbox';
pinInput.id = 'pin-input'
const pinLabel = document.createElement('label');
pinLabel.htmlFor = 'pin-input';
pinLabel.textContent = 'pin';

const submitItemButton = document.createElement('input');
submitItemButton.type = 'button';
submitItemButton.value = 'Submit';



const r4 = document.createElement('div');
const r5 = document.createElement('p');
// r2.appendChild(titleLabel);

// r3.appendChild(descriptionLabel);

r4.appendChild(dateDueBtn);
r4.appendChild(dateDueInput);
// r5.appendChild(pinLabel);
// r5.appendChild(pinInput);
addItemForm.appendChild(titleInput);
addItemForm.appendChild(descriptionInput);
addItemForm.appendChild(r4);
addItemForm.appendChild(r5);
addItemForm.appendChild(submitItemButton);
addItemModalContent.appendChild(addItemForm);
addItemModal.appendChild(addItemModalContent);

const setCancelItemListener = () => {

    window.addEventListener('click', (e) => {

        let isClickInModal = addItemModal.contains(e.target);
        if (e.target == addItemModal) {
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
            // addItemModal.hidden = true;
            renderProjectItems();

        }

        // console.log(projectTitle.textContent);

    })

};

setCancelItemListener();
setSubmitItemListener();
const openItemModal = () => {
    main.appendChild(addItemModal);
    addItemModal.style.display = "block";
};

const closeItemModal = () => {
    // Clear text inputs in modal 
    titleInput.textContent = '';
    descriptionInput.textContent = '';
    dateDueInput.value = '';
    dateDueInput.hidden = true;

    // Hide modal
    addItemModal.style.display = "none";
}

// const cancelItem = document.createElement('button');

// main.appendChild(addItemModal);

const renderAddItemModal = () => {


    openItemModal();

    setSubmitItemListener();
    setCancelItemListener();
}

export { openItemModal }