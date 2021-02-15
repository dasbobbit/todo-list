import { itemsList, projectsList } from './storeitems';

console.log('pageload script');

const contentContainer = document.getElementById("content");

const header = document.createElement('header');
const projectNav = document.createElement('div');
const main = document.createElement('main');
const footer = document.createElement('footer');
header.id= 'header';
projectNav.id = 'project-nav';
footer.id = 'footer';
main.id = 'main';
const navBarItems = ["home", "add-project", "add-item"]
const navBarButtons = document.createElement('div');

const renderNavBarItems = () => {
    navBarItems.forEach((element) => {
    let button = document.createElement('button');
        button.className = 'nav-button';
        button.id = 'nav-' + element;
        button.textContent = element;
        navBarButtons.appendChild(button);
    });
}

const renderSideBar = () => {
    console.log(projectsList);
    for (let i = 0; i < projectsList.length; i++) {
        console.log('renderSideBarIn');
        let projectItem = document.createElement('a');
        projectItem.textContent = `${projectsList[i]}`;
        console.log(projectItem);
        console.log(projectNav);
        projectNav.appendChild(projectItem);
    };
    let addProjectBtn = document.createElement('a');
    addProjectBtn.textContent = '+';
    projectNav.appendChild(addProjectBtn);
    main.appendChild(projectNav);
    // projectNav.appendChild('projectsDiv');
};

const pageLoad = () => {
    renderNavBarItems();
    renderSideBar();
    header.appendChild(navBarButtons);
    contentContainer.appendChild(header);
    // contentContainer.appendChild(projectNav);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);
}

export { pageLoad }