import { editProject, addToProjects, projectsList } from './storage';
import { renderProjectItems, renderSideBar } from './displayitems';

const editProjectListener = () => {

    const projectTitle = document.querySelector('#project-title');
    let initProjectTitle = projectTitle.textContent;
    projectTitle.addEventListener('click', () => {
        console.log(`clicked`);
        initProjectTitle = projectTitle.textContent;
        projectTitle.contentEditable = 'true';
        // projectTitle.textContent = projectTitle.textContent;
    });

    projectTitle.addEventListener('input', (e) => {
        console.log(`input detected`);
    });

    projectTitle.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            editProjectCheck();
        }
    });

    projectTitle.addEventListener('blur', editProjectCheck);

    function editProjectCheck() {
        if (projectTitle.textContent.trim() == '') {
            console.log(`nothing entered`);
            console.log(initProjectTitle);
            projectTitle.textContent = initProjectTitle;
        } else if (projectsList.some(e => e === projectTitle.textContent)) {
            // alert(`Project name already taken`);
            projectTitle.textContent = initProjectTitle;

        } else {
            editProject(initProjectTitle, projectTitle.textContent.trim());
            renderSideBar();
            // renderProjectItems();
        }
    }
};



export default editProjectListener