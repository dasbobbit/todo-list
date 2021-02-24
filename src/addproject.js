import { addToProjects, projectsList } from './storage';
import { renderSideBar } from './displayitems';

const addProject = () => {

    const addProjectBtn = document.querySelector('#add-project-btn');

    addProjectBtn.addEventListener('click', () => {
        addProjectBtn.textContent = '';
    });

    addProjectBtn.addEventListener('input', (e) => {
        console.log(`input detected`);
    });

    addProjectBtn.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            addProjectCheck();
        }
    });

    addProjectBtn.addEventListener('blur', addProjectCheck);

    function addProjectCheck() {
        if (addProjectBtn.textContent.trim() == '') {
            addProjectBtn.textContent = '+';
        } else if (projectsList.some(e => e === addProjectBtn.textContent)) {
            // alert(`Project name already taken`);
            addProjectBtn.textContent = '';

        } else {
            addToProjects(addProjectBtn.textContent);
            renderSideBar();
            addProject();
        }
    }
};

// const addProjectToStorage = () => {
//     console.log(`try to add + if empty`);
//     if (addProjectBtn.textContent = '') {
//         console.log(`try to add + if empty`);
//         addProjectBtn.textContent = '+';
//     }
// }

export default addProject