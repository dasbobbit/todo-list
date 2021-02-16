import { addToProjects } from './storage';
import { renderSideBar } from './displayitems';

const addProject = () => {
    console.log('addProject script');

    const addProjectBtn = document.querySelector('#add-project-btn');

    addProjectBtn.addEventListener('click', () => {
        addProjectBtn.textContent = '';
    });

    addProjectBtn.addEventListener('input', () => {
        console.log(`input detected`);
    });

    addProjectBtn.addEventListener('blur', () => {

        if (addProjectBtn.textContent == '') {
            addProjectBtn.textContent = '+';
        } else {
            addToProjects(addProjectBtn.textContent);
            renderSideBar();
            addProject();
        }
    });
};

// const addProjectToStorage = () => {
//     console.log(`try to add + if empty`);
//     if (addProjectBtn.textContent = '') {
//         console.log(`try to add + if empty`);
//         addProjectBtn.textContent = '+';
//     }
// }

export default addProject