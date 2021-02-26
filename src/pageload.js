import { itemsList, projectsList } from './storage';

const contentContainer = document.getElementById("content");

const header = document.createElement('header');
// const projectNav = document.createElement('div');
// projectNav.id = 'project-nav';
const main = document.createElement('main');
const footer = document.createElement('footer');
header.id= 'header';
footer.id = 'footer';
main.id = 'main';
const navBarItems = ["home"]
const navBarButtons = document.createElement('div');

const renderNavBarItems = () => {

    let projectTitle = document.createElement('a');
    projectTitle.id = 'project-title';
    projectTitle.textContent = 'All Cards';
    header.appendChild(projectTitle);
}

const pageLoad = () => {
    renderNavBarItems();
    // renderSideBar();
    header.appendChild(navBarButtons);
    contentContainer.appendChild(header);
    // contentContainer.appendChild(projectNav);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);
}

export { pageLoad }