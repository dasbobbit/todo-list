import { addToItems } from './storeitems';

const contentContainer = document.getElementById("content");
// const mainContainer = document.getElementById("main");

const addItemModal = document.createElement('div');
addItemModal.id = 'add-item-modal';
const addItemForm = document.createElement('form');
addItemForm.id = 'add-item-form';

const heading = document.createElement('h1');
heading.textContent = 'Add Items';
let row = document.createElement('p');

const projectInput = document.createElement('input');
projectInput.id = 'project-input'
const projectLabel = document.createElement('label');
projectLabel.htmlFor = 'project-input';
projectLabel.textContent = 'Project';

const titleInput = document.createElement('input');
titleInput.id = 'title-input'
const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title-input';
titleLabel.textContent = 'Title';

const descriptionInput = document.createElement('input');
descriptionInput.id = 'description-input'
const descriptionLabel = document.createElement('label');
descriptionLabel.htmlFor = 'description-input';
descriptionLabel.textContent = 'Description';

const dateDueInput = document.createElement('input');
dateDueInput.type = 'date';
dateDueInput.id = 'date-due-input'
const dateDueLabel = document.createElement('label');
dateDueLabel.htmlFor = 'date-due-input';
dateDueLabel.textContent = 'Date due:';

const pinInput = document.createElement('input');
pinInput.type = 'checkbox';
pinInput.id = 'pin-input'
const pinLabel = document.createElement('label');
pinLabel.htmlFor = 'pin-input';
pinLabel.textContent = 'pin';

const submitItemButton = document.createElement('button');
submitItemButton.type = 'button';
submitItemButton.textContent = 'Submit';
submitItemButton.addEventListener('click', (e) => {
    console.log(e);
    addToItems(projectInput.value, titleInput.value, descriptionInput.value, dateDueInput.value, pinInput.checked);
});
// const cancelItem = document.createElement('button');

// Generate rows for form 
const r1 = document.createElement('p');
const r2 = document.createElement('p');
const r3 = document.createElement('p');
const r4 = document.createElement('p');
const r5 = document.createElement('p');
r1.appendChild(projectLabel);
r1.appendChild(projectInput);
r2.appendChild(titleLabel);
r2.appendChild(titleInput);
r3.appendChild(descriptionLabel);
r3.appendChild(descriptionInput);
r4.appendChild(dateDueLabel);
r4.appendChild(dateDueInput);
r5.appendChild(pinLabel);
r5.appendChild(pinInput);
addItemForm.appendChild(r1);
addItemForm.appendChild(r2);
addItemForm.appendChild(r3);
addItemForm.appendChild(r4);
addItemForm.appendChild(r5);
addItemForm.appendChild(submitItemButton);
addItemModal.appendChild(addItemForm);
const renderAddItemForm = () => {
    main.appendChild(addItemModal);
}

export { renderAddItemForm }